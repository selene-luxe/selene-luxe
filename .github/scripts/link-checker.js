// Selene Luxe — Automated Etsy Link Checker
// Runs via GitHub Actions on a 48-hour cron schedule.
// Checks all Etsy product listings via the official Etsy Open API v3.
// Amazon products are flagged for manual review ONLY — no HTTP requests to Amazon.
//
// Required GitHub Secrets:
//   SUPABASE_URL         — your Supabase project URL
//   SUPABASE_SERVICE_KEY — your Supabase service role key (not anon key)
//   ETSY_API_KEY         — your Etsy Open API v3 keystring

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const ETSY_API_KEY = process.env.ETSY_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !ETSY_API_KEY) {
  console.error('❌ Missing required environment variables. Check GitHub Secrets.');
  process.exit(1);
}

async function supabaseRequest(path, method = 'GET', body = null) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    method,
    headers: {
      apikey:          SUPABASE_KEY,
      Authorization:   `Bearer ${SUPABASE_KEY}`,
      'Content-Type':  'application/json',
      Prefer:          'return=representation'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase ${method} ${path} → ${res.status}: ${text}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

async function checkEtsyListing(listingId) {
  const url = `https://openapi.etsy.com/v3/application/listings/${listingId}`;
  const res = await fetch(url, {
    headers: { 'x-api-key': ETSY_API_KEY }
  });

  if (res.status === 404) {
    return { alive: false, reason: '404_listing_not_found' };
  }
  if (res.status === 429) {
    console.warn(`⚠️  Etsy rate limit hit for listing ${listingId} — skipping`);
    return { alive: null, reason: 'rate_limited' };
  }
  if (!res.ok) {
    return { alive: null, reason: `api_error_${res.status}` };
  }

  const data = await res.json();
  const isActive   = data.state === 'active';
  const hasStock   = typeof data.quantity === 'number' ? data.quantity > 0 : true;
  const alive      = isActive && hasStock;

  return {
    alive,
    reason: alive
      ? `active (qty: ${data.quantity ?? 'n/a'})`
      : `state=${data.state}, qty=${data.quantity ?? 'unknown'}`
  };
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('🔍 Selene Luxe Link Checker — started at', new Date().toISOString());
  console.log('');

  let swapped = 0;
  let errors  = 0;
  let skipped = 0;

  // ── ETSY: Check all active Etsy listings via official API ──────────────────
  const etsyProducts = await supabaseRequest(
    '/products?platform=eq.etsy&etsy_listing_id=not.is.null&select=js_id,name,etsy_listing_id,primary_affiliate_url,backup_category_url,status'
  );

  console.log(`📦 Found ${etsyProducts.length} Etsy product(s) to check`);

  for (const p of etsyProducts) {
    try {
      const { alive, reason } = await checkEtsyListing(p.etsy_listing_id);

      if (alive === null) {
        console.log(`⏭️  SKIPPED  #${p.js_id} "${p.name}" (${reason})`);
        skipped++;
      } else {
        const newStatus  = alive ? 'active' : 'out_of_stock';
        const newUrl     = alive ? p.primary_affiliate_url : p.backup_category_url;
        const wasSwapped = !alive && p.status !== 'out_of_stock';

        await supabaseRequest(`/products?js_id=eq.${p.js_id}`, 'PATCH', {
          status:              newStatus,
          current_display_url: newUrl,
          last_checked_at:     new Date().toISOString()
        });

        if (!alive) {
          const flag = wasSwapped ? '⚠️  SWAPPED ' : '🔴 STILL OUT';
          console.log(`${flag} #${p.js_id} "${p.name}" → backup URL (${reason})`);
          if (wasSwapped) swapped++;
        } else {
          console.log(`✅ OK       #${p.js_id} "${p.name}" (${reason})`);
        }
      }
    } catch (err) {
      console.error(`❌ ERROR    #${p.js_id} "${p.name}" — ${err.message}`);
      errors++;
    }

    // Rate limit: Etsy Open API allows ~10 requests/second — stay well under
    await sleep(350);
  }

  // ── AMAZON: Flag for manual review ONLY — never fetch amazon.com URLs ──────
  // Amazon actively blocks automated HTTP requests and may ban the IP.
  // Safe path: use Amazon PA API once you have 3+ qualifying sales.
  const amazonProducts = await supabaseRequest(
    '/products?platform=eq.amazon&status=eq.unknown&select=js_id,name'
  );

  if (amazonProducts.length > 0) {
    console.log('');
    console.log(`🚩 Flagging ${amazonProducts.length} new Amazon product(s) for manual review`);

    for (const p of amazonProducts) {
      await supabaseRequest(`/products?js_id=eq.${p.js_id}`, 'PATCH', {
        status:          'flagged',
        last_checked_at: new Date().toISOString()
      });
      console.log(`   📌 #${p.js_id} "${p.name}" → flagged`);
    }
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('');
  console.log('─────────────────────────────────────────────');
  console.log(`✅ Checked : ${etsyProducts.length} Etsy listings`);
  console.log(`⚠️  Swapped : ${swapped} (redirected to backup)`);
  console.log(`🚩 Amazon  : ${amazonProducts.length} flagged for manual review`);
  console.log(`⏭️  Skipped : ${skipped} (rate limited / API errors)`);
  console.log(`❌ Errors  : ${errors}`);
  console.log('─────────────────────────────────────────────');
  console.log('Done at', new Date().toISOString());

  if (errors > 0) process.exit(1);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
