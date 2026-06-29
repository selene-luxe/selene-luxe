const OWNER  = 'selene-luxe';
const REPO   = 'selene-luxe';
const BRANCH = 'main';

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        return {
            statusCode: 500, headers,
            body: JSON.stringify({
                error: 'GITHUB_TOKEN is not configured. Go to Netlify dashboard → Site settings → Environment variables and add GITHUB_TOKEN.'
            })
        };
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) };
    }

    const { product, imageBase64, imageFilename } = body;
    if (!product || !product.name || !product.brand) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required product fields' }) };
    }

    try {
        /* ── 1. Fetch current products.js ── */
        const fileData = await ghGet(`/repos/${OWNER}/${REPO}/contents/js/products.js`, token);
        const raw = Buffer.from(fileData.content.replace(/\n/g, ''), 'base64').toString('utf8');

        /* ── 2. Determine next ID ── */
        const ids = [...raw.matchAll(/\bid\s*:\s*(\d+)/g)].map(m => parseInt(m[1]));
        const nextId = ids.length ? Math.max(...ids) + 1 : 58;

        /* ── 3. Generate new product entry ── */
        const imgFile = imageFilename || 'product-' + nextId + '.jpg';
        const entry   = buildEntry(product, nextId, imgFile);

        /* ── 4. Insert before final ]; ── */
        const insertAt = raw.lastIndexOf('];');
        if (insertAt === -1) throw new Error('Could not find end of products array in products.js');
        const updated = raw.slice(0, insertAt) + entry + '\n];';

        /* ── 5. Upload image (if provided) ── */
        if (imageBase64 && imageFilename) {
            const imgContent = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;
            let imgSha;
            try {
                const existing = await ghGet(`/repos/${OWNER}/${REPO}/contents/images/${imageFilename}`, token);
                imgSha = existing.sha;
            } catch (_) { /* New file — no sha needed */ }

            await ghPut(`/repos/${OWNER}/${REPO}/contents/images/${imageFilename}`, {
                message: `Add product image: ${imageFilename}`,
                content: imgContent,
                branch: BRANCH,
                ...(imgSha ? { sha: imgSha } : {})
            }, token);
        }

        /* ── 6. Commit updated products.js ── */
        await ghPut(`/repos/${OWNER}/${REPO}/contents/js/products.js`, {
            message: `Add product #${nextId}: ${product.brand} – ${product.name}`,
            content: Buffer.from(updated).toString('base64'),
            sha: fileData.sha,
            branch: BRANCH
        }, token);

        return {
            statusCode: 200, headers,
            body: JSON.stringify({ success: true, id: nextId })
        };

    } catch (err) {
        console.error('[add-product]', err.message);
        return {
            statusCode: 500, headers,
            body: JSON.stringify({ error: err.message })
        };
    }
};

/* ── GitHub REST helpers ── */
async function ghGet(path, token) {
    const res = await fetch(`https://api.github.com${path}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`GitHub ${res.status} GET ${path}: ${txt.slice(0, 200)}`);
    }
    return res.json();
}

async function ghPut(path, body, token) {
    const res = await fetch(`https://api.github.com${path}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`GitHub ${res.status} PUT ${path}: ${txt.slice(0, 200)}`);
    }
    return res.json();
}

/* ── Build the JS object string ── */
function buildEntry(p, id, imgFile) {
    const q    = s => String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const type = ['cosmetics', 'home'].includes(p.category) ? 'lifestyle' : 'fashion';

    const lines = [
        `    {`,
        `        id: ${id},`,
        `        category: "${p.category}",`,
        `        type: "${type}",`,
        `        brand: "${q(p.brand)}",`,
        `        name: "${q(p.name)}",`,
        `        description: "${q(p.description)}",`
    ];
    if (p.price)    lines.push(`        price: "${q(p.price)}",`);
    if (p.badge)    lines.push(`        badge: "${q(p.badge)}",`);
    if (p.trending) lines.push(`        trending: "${q(p.trending)}",`);
    lines.push(
        `        image1: "images/${imgFile}",`,
        `        image2: "images/${imgFile}",`,
        `        affiliateLink: "${q(p.affiliateLink)}",`,
        `        buttonText: "${q(p.buttonText)}"`,
        `    },`
    );
    return lines.join('\n');
}
