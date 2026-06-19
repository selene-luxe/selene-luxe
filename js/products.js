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
        image1: "images/Newsboy%20Cap.webp",
        image2: "images/Newsboy%20Cap.webp",
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
        image1: "images/Leather%20Suspender.webp",
        image2: "images/Leather%20Suspender.webp",
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
        image1: "images/Casual%20Twisted%20Knitted%20Pullover%20Sweater.webp",
        image2: "images/Casual%20Twisted%20Knitted%20Pullover%20Sweater.webp",
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
        image1: "images/Casual%20Trench%20Coat.webp",
        image2: "images/Casual%20Trench%20Coat.webp",
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
        image1: "images/Tweed%20Herringbone%20Vintage%20trouser.webp",
        image2: "images/Tweed%20Herringbone%20Vintage%20trouser.webp",
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
        image1: "images/Vintage%20Pocket%20Watch.webp",
        image2: "images/Vintage%20Pocket%20Watch.webp",
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
        image1: "images/Rubber-Lace-up%20Boot.webp",
        image2: "images/Rubber-Lace-up%20Boot.webp",
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
        image1: "images/navy-maxi-coat.webp",
        image2: "images/navy-maxi-coat.webp",
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
        image1: "images/navy-crewneck-sweater.webp",
        image2: "images/navy-crewneck-sweater.webp",
        affiliateLink: "https://amzn.to/4t1lm0O",
        buttonText: "Shop on Amazon"
    },
    {
        id: 21,
        outfitId: ["navy-ivory-edit", "blush-ivory-edit"],
        category: "women",
        brand: "SELENE LUXE",
        name: "Ivory Wide-Leg Pleated Trousers",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/ivory-wide-leg-pants.webp",
        image2: "images/ivory-wide-leg-pants.webp",
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
        image1: "images/lime-green-bag.webp",
        image2: "images/lime-green-bag.webp",
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
        image1: "images/ivory-ankle-booties.webp",
        image2: "images/ivory-ankle-booties.webp",
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
        image1: "images/gingham-blouse.webp",
        image2: "images/gingham-blouse.webp",
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
        image1: "images/suspender-skirt.webp",
        image2: "images/suspender-skirt.webp",
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
        image1: "images/bear-crossbody.webp",
        image2: "images/bear-crossbody.webp",
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
        image1: "images/mary-jane-flats.webp",
        image2: "images/mary-jane-flats.webp",
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
        image1: "images/ruffle-socks.webp",
        image2: "images/ruffle-socks.webp",
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
        image1: "images/white-headband.webp",
        image2: "images/white-headband.webp",
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
        image1: "images/lineage1.webp",
        image2: "images/lineage1.webp",
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
        image1: "images/COSRX1.webp",
        image2: "images/COSRX1.webp",
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
        image1: "images/COSRX2.webp",
        image2: "images/COSRX2.webp",
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
        image1: "images/HEAWISH Women's Floral Ballet Flats white.webp",
        image2: "images/HEAWISH Women's Floral Ballet Flats white.webp",
        affiliateLink: "https://amzn.to/3OLY4h2",
        buttonText: "Shop on Amazon",
        variants: [
            {
                color: "White",
                colorCode: "#ffffff",
                image: "images/HEAWISH Women's Floral Ballet Flats white.webp",
                affiliateLink: "https://amzn.to/3OLY4h2"
            },
            {
                color: "Beige",
                colorCode: "#f5f5dc",
                image: "images/HEAWISH Women's Floral Ballet Flats beige.webp",
                affiliateLink: "https://amzn.to/4eBg3kC"
            },
            {
                color: "Black",
                colorCode: "#000000",
                image: "images/HEAWISH Women's Floral Ballet Flats black.webp",
                affiliateLink: "https://amzn.to/4dQhz2a"
            },
            {
                color: "Grey",
                colorCode: "#808080",
                image: "images/HEAWISH Women's Floral Ballet Flats grey.webp",
                affiliateLink: "https://amzn.to/4cAPcTo"
            },
            {
                color: "Chocolate",
                colorCode: "#7b3f00",
                image: "images/HEAWISH Women's Floral Ballet Flats chocolate.webp",
                affiliateLink: "https://amzn.to/4tVIm1B"
            },
            {
                color: "Light Blue",
                colorCode: "#add8e6",
                image: "images/HEAWISH Women's Floral Ballet Flats light blue.webp",
                affiliateLink: "https://amzn.to/4dVhQ3Z"
            },
            {
                color: "Light Green",
                colorCode: "#90ee90",
                image: "images/HEAWISH Women's Floral Ballet Flats light green.webp",
                affiliateLink: "https://amzn.to/41IeutF"
            },
            {
                color: "Pink",
                colorCode: "#ffc0cb",
                image: "images/HEAWISH Women's Floral Ballet Flats pink.webp",
                affiliateLink: "https://amzn.to/4evx2Vu"
            },
            {
                color: "Red",
                colorCode: "#ff0000",
                image: "images/HEAWISH Women's Floral Ballet Flats red.webp",
                affiliateLink: "https://amzn.to/4mIOt7q"
            }
        ]
    },
    {
        id: 34,
        category: "women",
        brand: "WOOSEA",
        name: "Women's Split Bodycon Mermaid Evening Cocktail Long Dress",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress black.webp",
        image2: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress black.webp",
        affiliateLink: "https://amzn.to/4t3Hibn",
        buttonText: "Shop on Amazon",
        variants: [
            {
                color: "Black",
                colorCode: "#000000",
                image: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress black.webp",
                affiliateLink: "https://amzn.to/4t3Hibn"
            },
            {
                color: "Purple",
                colorCode: "#800080",
                image: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress purple.webp",
                affiliateLink: "https://amzn.to/4tFC6vq"
            },
            {
                color: "Navy Blue",
                colorCode: "#000080",
                image: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress navy blue.webp",
                affiliateLink: "https://amzn.to/4u6BxdG"
            },
            {
                color: "Royal Blue",
                colorCode: "#4169E1",
                image: "images/WOOSEA Women's Split Bodycon Mermaid Evening Dress royal blue.webp",
                affiliateLink: "https://amzn.to/4cUPuok"
            }
        ]
    },
    {
        id: 35,
        category: "women",
        brand: "WOOSEA",
        name: "Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress black.webp",
        image2: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress black.webp",
        affiliateLink: "https://amzn.to/3QO8xsU",
        buttonText: "Shop on Amazon",
        variants: [
            {
                color: "Purple",
                colorCode: "#800080",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress purple.webp",
                affiliateLink: "https://amzn.to/3OQvsDd"
            },
            {
                color: "Green",
                colorCode: "#008000",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress green.webp",
                affiliateLink: "https://amzn.to/4eNvdTZ"
            },
            {
                color: "Red",
                colorCode: "#ff0000",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress red.webp",
                affiliateLink: "https://amzn.to/4ucVW0G"
            },
            {
                color: "Black",
                colorCode: "#000000",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress black.webp",
                affiliateLink: "https://amzn.to/3QO8xsU"
            },
            {
                color: "Navy Blue",
                colorCode: "#000080",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress navy blue.webp",
                affiliateLink: "https://amzn.to/42150Kk"
            },
            {
                color: "Royal Blue",
                colorCode: "#4169E1",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress royal blue.webp",
                affiliateLink: "https://amzn.to/3Qzgoup"
            },
            {
                color: "Burgundy Dark",
                colorCode: "#4a0404",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress burgundy.webp",
                affiliateLink: "https://amzn.to/4vXyoii"
            },
            {
                color: "Burgundy",
                colorCode: "#800020",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress burgundy2.webp",
                affiliateLink: "https://amzn.to/4ukXwhn"
            },
            {
                color: "Magenta",
                colorCode: "#ff00ff",
                image: "images/WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress magenta.webp",
                affiliateLink: "https://amzn.to/48W0WPe"
            }
        ]
    },
    // SUMMER DRESSES
    {
        id: 36,
        category: "women",
        brand: "Summer Collection",
        name: "The Bowknot Lace Mini Dress",
        price: "Check Price",
        badge: "Summer Essential",
        image1: "images/summer dress 1.webp",
        image2: "images/summer dress 1.webp",
        affiliateLink: "https://a.co/d/0atlL5m0",
        buttonText: "Shop on Amazon"
    },
    {
        id: 37,
        category: "women",
        brand: "Summer Collection",
        name: "The Flowy Tiered Maxi Dress",
        price: "Check Price",
        badge: "Summer Essential",
        image1: "images/summer dress 2.webp",
        image2: "images/summer dress 2.webp",
        affiliateLink: "https://a.co/d/0do0Lk0K",
        buttonText: "Shop on Amazon"
    },
    {
        id: 38,
        category: "women",
        brand: "Summer Collection",
        name: "The Crochet Tassel Maxi Dress",
        price: "Check Price",
        badge: "Summer Essential",
        image1: "images/summer dress 3.webp",
        image2: "images/summer dress 3.webp",
        affiliateLink: "https://a.co/d/08wyP2Yr",
        buttonText: "Shop on Amazon"
    },
    {
        id: 39,
        category: "women",
        brand: "Summer Collection",
        name: "The Bohemian Halter Mini Dress",
        price: "Check Price",
        badge: "Summer Essential",
        image1: "images/summer dress 4.webp",
        image2: "images/summer dress 4.webp",
        affiliateLink: "https://a.co/d/05l2Bh9T",
        buttonText: "Shop on Amazon"
    },
    {
        id: 40,
        category: "women",
        brand: "TANKANEO",
        name: "Cropped Cotton Collared Button-Down Blouse",
        price: "Check Price",
        badge: "Style Inspiration",
        image1: "images/e6156b53-34f7-4e37-bbf2-1ec17640a4cc.jpg",
        image2: "images/e6156b53-34f7-4e37-bbf2-1ec17640a4cc.jpg",
        outfitId: "blush-ivory-edit",
        affiliateLink: "https://a.co/d/014lDOPH",
        buttonText: "Shop on Amazon"
    },

    // HOME & LIFESTYLE
    {
        id: 41,
        category: "home",
        brand: "Luckystyle",
        name: "Dimmable Arc Floor Lamp with Remote",
        price: "Check Price",
        badge: "Home Edit",
        image1: "images/lamp1.jpg",
        image2: "images/lamp1.jpg",
        affiliateLink: "https://a.co/d/05hw3ndJ",
        buttonText: "Shop on Amazon"
    },
    {
        id: 42,
        category: "home",
        brand: "Kockuu",
        name: "6ft Artificial Olive Tree with White Pot",
        price: "Check Price",
        badge: "Home Edit",
        image1: "images/plant1.jpg",
        image2: "images/plant1.jpg",
        affiliateLink: "https://a.co/d/02MSovsX",
        buttonText: "Shop on Amazon"
    },
    {
        id: 43,
        category: "home",
        brand: "Victrola",
        name: "Willow Retro Wood Bluetooth Radio",
        price: "Check Price",
        badge: "Home Edit",
        image1: "images/radio1.jpg",
        image2: "images/radio1.jpg",
        affiliateLink: "https://a.co/d/005FR4N6",
        buttonText: "Shop on Amazon"
    }
];

const outfits = [
    {
        id: "birmingham-edit",
        name: "The Birmingham Edit",
        description: "Inspired by the sharp, authoritative style of the 1920s Birmingham gentleman. This collection features heavy wools, structured tailoring, and timeless accessories for a commanding look.",
        heroImage: "images/outfit1.webp",
        category: "Men"
    },
    {
        id: "navy-ivory-edit",
        name: "The Navy & Ivory Edit",
        description: "A sophisticated study in contrast. This look features a deep navy wool-blend maxi coat layered over crisp ivory wide-leg trousers, accented by a bold lime green top-handle bag for a modern, architectural finish.",
        heroImage: "images/navy-ivory-hero.webp",
        category: "Women"
    },
    {
        id: "pink-meadow-edit",
        name: "The Pink Meadow Edit",
        description: "A whimsical, vintage-inspired collection for your little one. This edit pairs a tan gingham blouse with a sweet suspender skirt, finished with charming accessories like a little bear crossbody and ruffle-trim socks.",
        heroImage: "images/pink-meadow-hero.webp",
        category: "Kids"
    },
    {
        id: "blush-ivory-edit",
        name: "The Blush & Ivory Edit",
        description: "A soft, feminine study in contrast. This edit pairs a blush pink cropped cotton button-down blouse with flowing ivory wide-leg pleated trousers — an effortlessly polished look that bridges casual comfort with refined elegance.",
        heroImage: "images/blush-ivory-hero.webp",
        heroVideo: "images/A_fast_paced_high_fashion_cin.mp4",
        category: "Women"
    },
    {
        id: "cosmetics-skincare-edit",
        name: "The Cosmetics & Skincare Edit",
        description: "A curated selection of premium Korean beauty essentials. This collection features hydrating lip masks and powerful snail mucin essences for radiant, healthy skin.",
        heroImage: "images/cosmetics-hero.webp",
        category: "Beauty"
    }
];