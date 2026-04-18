const products = [
    // THE BIRMINGHAM EDIT (PEAKY BLINDERS)
    {
        id: 12,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Signature Herringbone Newsboy Cap",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Newsboy%20Cap.jpg",
        image2: "images/Newsboy%20Cap.jpg",
        affiliateLink: "https://amzn.to/4cahnIL",
        buttonText: "Shop on Amazon"
    },
    {
        id: 13,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Heritage Leather Braces",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Leather%20Suspender.jpg",
        image2: "images/Leather%20Suspender.jpg",
        affiliateLink: "https://amzn.to/4bNdmJQ",
        buttonText: "Shop on Amazon"
    },
    {
        id: 14,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Cable-Knit Heritage Sweater",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Casual%20Twisted%20Knitted%20Pullover%20Sweater.jpg",
        image2: "images/Casual%20Twisted%20Knitted%20Pullover%20Sweater.jpg",
        affiliateLink: "https://amzn.to/4lOp7o9",
        buttonText: "Shop on Amazon"
    },
    {
        id: 15,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Classic Double-Breasted Trench",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Casual%20Trench%20Coat.jpg",
        image2: "images/Casual%20Trench%20Coat.jpg",
        affiliateLink: "https://amzn.to/3PvfWNc",
        buttonText: "Shop on Amazon"
    },
    {
        id: 16,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Tweed Herringbone Tailored Trousers",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Tweed%20Herringbone%20Vintage%20trouser.jpg",
        image2: "images/Tweed%20Herringbone%20Vintage%20trouser.jpg",
        affiliateLink: "https://amzn.to/41of93g",
        buttonText: "Shop on Amazon"
    },
    {
        id: 17,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Antique Mechanical Pocket Watch",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Vintage%20Pocket%20Watch.jpg",
        image2: "images/Vintage%20Pocket%20Watch.jpg",
        affiliateLink: "https://amzn.to/4bwhz5T",
        buttonText: "Shop on Amazon"
    },
    {
        id: 18,
        outfitId: "birmingham-edit",
        category: "men",
        brand: "SELENE LUXE",
        name: "Cap-Toe Heritage Combat Boots",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/Rubber-Lace-up%20Boot.jpg",
        image2: "images/Rubber-Lace-up%20Boot.jpg",
        affiliateLink: "https://amzn.to/3NWBP7E",
        buttonText: "Shop on Amazon"
    },
    // THE NAVY & IVORY EDIT
    {
        id: 19,
        outfitId: "navy-ivory-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Oversized Navy Wool-Blend Maxi Coat",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/navy-maxi-coat.jpg",
        image2: "images/navy-maxi-coat.jpg",
        affiliateLink: "https://amzn.to/4rZIz2H",
        buttonText: "Shop on Amazon"
    },
    {
        id: 20,
        outfitId: "navy-ivory-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Classic Navy Crewneck Knit Sweater",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/navy-crewneck-sweater.jpg",
        image2: "images/navy-crewneck-sweater.jpg",
        affiliateLink: "https://amzn.to/4t1lm0O",
        buttonText: "Shop on Amazon"
    },
    {
        id: 21,
        outfitId: "navy-ivory-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Ivory Wide-Leg Pleated Trousers",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/ivory-wide-leg-pants.jpg",
        image2: "images/ivory-wide-leg-pants.jpg",
        affiliateLink: "https://amzn.to/4uMKKt7",
        buttonText: "Shop on Amazon"
    },
    {
        id: 22,
        outfitId: "navy-ivory-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Structured Lime Green Top-Handle Bag",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/lime-green-bag.jpg",
        image2: "images/lime-green-bag.jpg",
        affiliateLink: "https://amzn.to/3PGH0Jm",
        buttonText: "Shop on Amazon"
    },
    {
        id: 23,
        outfitId: "navy-ivory-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Pointed-Toe Ivory Ankle Booties",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/ivory-ankle-booties.jpg",
        image2: "images/ivory-ankle-booties.jpg",
        affiliateLink: "https://amzn.to/47mlIH2",
        buttonText: "Shop on Amazon"
    },
    // THE pink MEADOW EDIT
    {
        id: 24,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Vintage Gingham Button-Up Blouse",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/gingham-blouse.jpg",
        image2: "images/gingham-blouse.jpg",
        affiliateLink: "https://amzn.to/4sshpSY",
        buttonText: "Shop on Amazon"
    },
    {
        id: 25,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Stretchy Cotton Suspender Skirt",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/suspender-skirt.jpg",
        image2: "images/suspender-skirt.jpg",
        affiliateLink: "https://amzn.to/4t5xvSp",
        buttonText: "Shop on Amazon"
    },
    {
        id: 26,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Little Bear Leather Crossbody",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/bear-crossbody.jpg",
        image2: "images/bear-crossbody.jpg",
        affiliateLink: "https://amzn.to/3NNLeOJ",
        buttonText: "Shop on Amazon"
    },
    {
        id: 27,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Classic T-Strap Mary Jane Flats",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/mary-jane-flats.jpg",
        image2: "images/mary-jane-flats.jpg",
        affiliateLink: "https://amzn.to/4dKmNw9",
        buttonText: "Shop on Amazon"
    },
    {
        id: 28,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Delicate Ruffle-Trim Ankle Socks",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/ruffle-socks.jpg",
        image2: "images/ruffle-socks.jpg",
        affiliateLink: "https://amzn.to/3O0Os1u",
        buttonText: "Shop on Amazon"
    },
    {
        id: 29,
        outfitId: "pink-meadow-edit",
        category: "kids",
        brand: "SELENE LUXE",
        name: "Wide Fabric Knot Headband",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/white-headband.jpg",
        image2: "images/white-headband.jpg",
        affiliateLink: "https://amzn.to/4uYG4QX",
        buttonText: "Shop on Amazon"
    },
    {
        id: 30,
        outfitId: "cosmetics-skincare-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Berry Lip Sleeping Mask",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/lineage1.jpg",
        image2: "images/lineage1.jpg",
        affiliateLink: "https://amzn.to/41BzvX7",
        buttonText: "Shop on Amazon"
    },
    {
        id: 31,
        outfitId: "cosmetics-skincare-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Snail Mucin Power Repairing Essence",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/COSRX1.jpg",
        image2: "images/COSRX1.jpg",
        affiliateLink: "https://amzn.to/4c4Vj1R",
        buttonText: "Shop on Amazon"
    },
    {
        id: 32,
        outfitId: "cosmetics-skincare-edit",
        category: "women",
        brand: "SELENE LUXE",
        name: "Advanced Snail 96 Mucin Essence",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/COSRX2.jpg",
        image2: "images/COSRX2.jpg",
        affiliateLink: "https://amzn.to/4crVMMW",
        buttonText: "Shop on Amazon"
    },
    {
        id: 33,
        category: "women",
        brand: "HEAWISH",
        name: "Women's Floral Ballet Flats",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/HEAWISH Women's Floral Ballet Flats white.jpeg",
        image2: "images/HEAWISH Women's Floral Ballet Flats white.jpeg",
        affiliateLink: "https://amzn.to/3OLY4h2",
        buttonText: "Shop on Amazon",
        variants: [
            {
                color: "White",
                colorCode: "#ffffff",
                image: "images/HEAWISH Women's Floral Ballet Flats white.jpeg",
                affiliateLink: "https://amzn.to/3OLY4h2"
            },
            {
                color: "Beige",
                colorCode: "#f5f5dc",
                image: "images/HEAWISH Women's Floral Ballet Flats beige.jpeg",
                affiliateLink: "https://amzn.to/4eBg3kC"
            },
            {
                color: "Black",
                colorCode: "#000000",
                image: "images/HEAWISH Women's Floral Ballet Flats black.jpeg",
                affiliateLink: "https://amzn.to/4dQhz2a"
            },
            {
                color: "Grey",
                colorCode: "#808080",
                image: "images/HEAWISH Women's Floral Ballet Flats grey.jpeg",
                affiliateLink: "https://amzn.to/4cAPcTo"
            },
            {
                color: "Chocolate",
                colorCode: "#7b3f00",
                image: "images/HEAWISH Women's Floral Ballet Flats chocolate.jpeg",
                affiliateLink: "https://amzn.to/4tVIm1B"
            },
            {
                color: "Light Blue",
                colorCode: "#add8e6",
                image: "images/HEAWISH Women's Floral Ballet Flats light blue.jpeg",
                affiliateLink: "https://amzn.to/4dVhQ3Z"
            },
            {
                color: "Light Green",
                colorCode: "#90ee90",
                image: "images/HEAWISH Women's Floral Ballet Flats light green.jpeg",
                affiliateLink: "https://amzn.to/41IeutF"
            },
            {
                color: "Pink",
                colorCode: "#ffc0cb",
                image: "images/HEAWISH Women's Floral Ballet Flats pink.jpeg",
                affiliateLink: "https://amzn.to/4evx2Vu"
            },
            {
                color: "Red",
                colorCode: "#ff0000",
                image: "images/HEAWISH Women's Floral Ballet Flats red.jpeg",
                affiliateLink: "https://amzn.to/4mIOt7q"
            }
        ]
    }
];

const outfits = [
    {
        id: "birmingham-edit",
        name: "The Birmingham Edit",
        description: "Inspired by the sharp, authoritative style of the 1920s Birmingham gentleman. This collection features heavy wools, structured tailoring, and timeless accessories for a commanding look.",
        heroImage: "images/outfit1.jpg",
        category: "Men"
    },
    {
        id: "navy-ivory-edit",
        name: "The Navy & Ivory Edit",
        description: "A sophisticated study in contrast. This look features a deep navy wool-blend maxi coat layered over crisp ivory wide-leg trousers, accented by a bold lime green top-handle bag for a modern, architectural finish.",
        heroImage: "images/navy-ivory-hero.jpg",
        category: "Women"
    },
    {
        id: "pink-meadow-edit",
        name: "The Pink Meadow Edit",
        description: "A whimsical, vintage-inspired collection for your little one. This edit pairs a tan gingham blouse with a sweet suspender skirt, finished with charming accessories like a little bear crossbody and ruffle-trim socks.",
        heroImage: "images/pink-meadow-hero.jpg",
        category: "Kids"
    },
    {
        id: "cosmetics-skincare-edit",
        name: "The Cosmetics & Skincare Edit",
        description: "A curated selection of premium Korean beauty essentials. This collection features hydrating lip masks and powerful snail mucin essences for radiant, healthy skin.",
        heroImage: "images/cosmetics-hero.jpg",
        category: "Beauty"
    }
];