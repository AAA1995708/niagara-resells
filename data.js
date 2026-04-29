/**
 * Niagara Resells - Product Data
 * 
 * Add, remove, or edit products here.
 * Each product needs: id, name, price, category, images (at least 2 for hover effect).
 * Optional fields: colors, note, tag.
 */

const PRODUCTS = [
  // ─── TOPS ────────────────────────────────────────
  {
    id: "essentials-hoodie",
    name: "Essentials Hoodie",
    price: 75,
    category: "Tops",
    colors: "Washed Black, Dark Oak, Light Oak",
    images: [
      "https://cdn-images.farfetch-contents.com/27/35/86/22/27358622_57322612_600.jpg",
      "https://cdn-images.farfetch-contents.com/18/65/99/25/18659925_40518678_600.jpg"
    ]
  },
  {
    id: "essentials-sweatpants",
    name: "Essentials Sweatpants",
    price: 65,
    category: "Tops",
    colors: "Black, Dark Oak, Light Oak",
    images: [
      "https://createfashionbrand.com/wp-content/uploads/2024/06/novo-2.webp",
      "https://cdn-images.farfetch-contents.com/18/65/99/25/18659925_40518678_600.jpg"
    ]
  },
  {
    id: "polo-tshirt",
    name: "Polo T-Shirt",
    price: 45,
    category: "Tops",
    colors: "Black Red, Black White, Grey",
    images: [
      "https://images.asos-media.com/products/polo-ralph-lauren-large-player-logo-chest-stripe-heavyweight-t-shirt-in-black-red/208824895-5?$n_640w$&wid=513&fit=constrain",
      "https://images.asos-media.com/products/polo-ralph-lauren-large-player-logo-chest-stripe-heavyweight-t-shirt-in-black-red/208824895-4?$n_640w$&wid=513&fit=constrain"
    ]
  },
  {
    id: "stussy-tshirts",
    name: "Stussy T-Shirts",
    price: 40,
    category: "Tops",
    note: "Send shirt image to email/snap for QC pics",
    images: [
      "https://images.stockx.com/images/Stussy-x-Denim-Tears-501-Jean-Indigo-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Stussy-x-Denim-Tears-501-Jean-Indigo-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "gallery-dept-tshirt",
    name: "Gallery Dept T-Shirt",
    price: 70,
    category: "Tops",
    note: "Send shirt image to email/snap for QC pics",
    images: [
      "https://images.stockx.com/images/Gallery-Dept-Centered-Logo-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color",
      "https://images.stockx.com/images/Gallery-Dept-Flames-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color"
    ]
  },
  {
    id: "bathing-ape-tshirt",
    name: "Bathing Ape T-Shirt",
    price: 35,
    category: "Tops",
    note: "Send shirt image to email/snap for QC pics",
    images: [
      "https://uk.bape.com/cdn/shop/files/001TEK701309_BLK_A.jpg?v=1727970912&width=1200",
      "https://uk.bape.com/cdn/shop/files/001CSJ801010_RED_A.jpg?v=1750757026&width=1200"
    ]
  },
  {
    id: "balenciaga-lamborghini",
    name: "Balenciaga x Lamborghini Shirt",
    price: 110,
    category: "Tops",
    images: [
      "https://images.stockx.com/images/Balenciaga-Automobil-Lamborghini-Oversized-Soccer-T-shirt-Black.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color",
      "https://www.mrporter.com/variants/images/46376663162909067/in/w2000_q60.jpg"
    ]
  },
  {
    id: "bape-hoodies",
    name: "Bape Hoodies",
    price: 90,
    category: "Tops",
    colors: "Grey, Blue, Red, Pink",
    tag: "Best Bape Rep",
    images: [
      "https://uk.bape.com/cdn/shop/files/001ZPK701005_GRA_B.jpg?v=1732123147&width=1200",
      "https://images.stockx.com/images/BAPE-Fire-Camo-Shark-Full-Zip-Hoodie-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "gallery-dept-hoodies",
    name: "Gallery Dept Hoodies",
    price: 80,
    category: "Tops",
    colors: "Black, Grey",
    images: [
      "https://images.stockx.com/images/Gallery-Dept-Flames-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color",
      "https://images.stockx.com/images/Gallery-Dept-Centered-Logo-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color"
    ]
  },
  {
    id: "chrome-hearts-longsleeve",
    name: "Chrome Hearts Long Sleeve",
    price: 65,
    category: "Tops",
    note: "Best Chrome Hearts Rep \u2014 Send image to email/snap",
    images: [
      "https://www.oakshop.ca/cdn/shop/products/Chrome-Hearts-Floral-Cross-L-S-T-shirt-Black_jpg.webp?v=1759468060",
      "https://maisonguava.com/cdn/shop/files/ce9b8b0f46c24318f3e419e42d5a0cdf.webp?v=1746201237&width=1080"
    ]
  },
  {
    id: "sp5der-hoodies",
    name: "SP5DER Hoodies",
    price: 80,
    category: "Tops",
    note: "Send picture to email/snap \u2014 Ask for more colors",
    images: [
      "https://images.stockx.com/images/Sp5der-OG-Web-Hoodie-Black-ProductX.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color",
      "https://image.made-in-china.com/2f0j00MnkBiQtGvYqE/Sp5der-Hoodies-Web-Graphic-Hoodie-with-Spider-Print-Street-Ready-Sweatshirt.jpg"
    ]
  },
  {
    id: "denim-tears-set",
    name: "Denim Tears Hoodie & Pants Set",
    price: 160,
    category: "Tops",
    colors: "Black on Black, Black, Blue, Pink",
    images: [
      "https://cdn-images.farfetch-contents.com/22/46/90/60/22469060_52374270_1000.jpg",
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/files/Denim-Tears-Cotton-Wreath-Hoodie-Black-Monochrome_1.webp?v=1737097545"
    ]
  },
  {
    id: "synah-set",
    name: "SyNAH Shorts & Shirt Set",
    price: 75,
    category: "Tops",
    colors: "Black, Pink, Grey, Blue",
    images: [
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_d62ec801-4c25-41b9-bc01-1626b74cedde.jpg?v=1716370214",
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_d62ec801-4c25-41b9-bc01-1626b74cedde.jpg?v=1716370214"
    ]
  },
  {
    id: "chrome-hearts-set",
    name: "Chrome Hearts Shirt Set",
    price: 110,
    category: "Tops",
    images: [
      "https://www.oakshop.ca/cdn/shop/products/Chrome-Hearts-Floral-Cross-L-S-T-shirt-Black-2_jpg.webp?v=1744321030&width=480",
      "https://www.oakshop.ca/cdn/shop/products/Chrome-Hearts-Floral-Cross-L-S-T-shirt-Black_jpg.webp?v=1759468060"
    ]
  },

  // ─── BOTTOMS ─────────────────────────────────────
  {
    id: "essentials-shorts",
    name: "Essentials Shorts",
    price: 45,
    category: "Bottoms",
    colors: "Washed Black, Dark Oak, Light Oak",
    images: [
      "https://www.crepslocker.com/cdn/shop/products/Fear-Of-God-Essentials-Black-Shorts-_SS22_-Crepslocker-Front.jpg?v=1658163784",
      "https://images.urbndata.com/is/image/UrbanOutfitters/82928409_009_m?$xlarge$&fit=constrain&qlt=80&wid=640"
    ]
  },
  {
    id: "essentials-uncuffed",
    name: "Essentials Uncuffed Sweatpants",
    price: 60,
    category: "Bottoms",
    colors: "Washed Black, Dark Oak, Light Oak",
    images: [
      "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/100/576/842/original/746243_01.jpg.jpeg?action=crop&width=750",
      "https://i.ebayimg.com/images/g/NgYAAeSwqYJpWKC9/s-l1200.jpg"
    ]
  },
  {
    id: "denim-tears-shorts",
    name: "Denim Tears Shorts",
    price: 55,
    category: "Bottoms",
    note: "Send shorts image to email/snap for QC pics",
    images: [
      "https://images.stockx.com/images/Denim-Tears-The-Cotton-Wreath-Shorts-Black-Product.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color",
      "https://cdn-images.farfetch-contents.com/22/46/90/60/22469060_52374270_1000.jpg"
    ]
  },

  // ─── SHOES ───────────────────────────────────────
  {
    id: "jordan-4",
    name: "Jordan 4 Retro",
    price: 85,
    category: "Shoes",
    colors: "Black, Red, Military Blue, White",
    tag: "Top Seller",
    images: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Oxidized-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "yeezy-slide",
    name: "Yeezy Slide",
    price: 55,
    category: "Shoes",
    colors: "Onyx, Bone, Soot, Azure",
    images: [
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Onyx.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Bone.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "new-balance-550",
    name: "New Balance 550",
    price: 65,
    category: "Shoes",
    colors: "White Green, White Blue, White Cream",
    images: [
      "https://images.stockx.com/images/New-Balance-550-White-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/New-Balance-550-White-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "jordan-1-low",
    name: "Jordan 1 Low",
    price: 75,
    category: "Shoes",
    colors: "White Black, Wolf Grey, Royal Blue, Mocha",
    images: [
      "https://images.stockx.com/images/Air-Jordan-1-Low-Og-White-Black-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Air-Jordan-1-Low-Og-Wolf-Grey-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "nike-dunk-low",
    name: "Nike Dunk Low",
    price: 60,
    category: "Shoes",
    colors: "Panda, Grey Fog, Kentucky, Green Glow",
    images: [
      "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-Panda-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Nike-Dunk-Low-Retro-Grey-Fog.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },

  // ─── ACCESSORIES ─────────────────────────────────
  {
    id: "lv-belt-wallet",
    name: "LV Belt + Wallet Set",
    price: 100,
    category: "Accessories",
    images: [
      "https://aonebrandsdubai.com/cdn/shop/files/64f71cf6-ee94-42f4-b007-fdedee14bd0c.jpg?v=1721676604&width=1445",
      "https://5.imimg.com/data5/ANDROID/Default/2025/11/560107840/PM/DE/XL/229748677/product-jpeg.jpg"
    ]
  },
  {
    id: "gucci-belt-wallet",
    name: "Gucci Belt + Wallet Set",
    price: 100,
    category: "Accessories",
    images: [
      "https://img.freeup.app/fit-in/600x600/filters:upscale()/e8c5febd68bcd0f080cdb108370b0b92.jpg",
      "https://img.freeup.app/fit-in/600x600/filters:upscale()/00e2c5ce7ba408ceb93ef2f56ca1407c.jpg"
    ]
  },
  {
    id: "chrome-hearts-ring",
    name: "Chrome Hearts Ring",
    price: 45,
    category: "Accessories",
    colors: "Silver, Gold, Black",
    images: [
      "https://www.oakshop.ca/cdn/shop/products/Chrome-Hearts-Floral-Cross-L-S-T-shirt-Black_jpg.webp?v=1759468060",
      "https://maisonguava.com/cdn/shop/files/ce9b8b0f46c24318f3e419e42d5a0cdf.webp?v=1746201237&width=1080"
    ]
  },
  {
    id: "versace-chain",
    name: "Versace Chain",
    price: 40,
    category: "Accessories",
    colors: "Gold, Silver",
    images: [
      "https://images.stockx.com/images/Versace-Medusa-Biggie-Gold-Chain.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Versace-Medusa-Biggie-Gold-Chain.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },

  // ─── FRAGRANCES ──────────────────────────────────
  {
    id: "tom-ford-fragrance",
    name: "Tom Ford Fragrance",
    price: 40,
    category: "Fragrances",
    colors: "Lost Cherry, Black Orchid, Tobacco Vanille",
    images: [
      "https://images.stockx.com/images/Tom-Ford-Lost-Cherry-100ml-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Tom-Ford-Tobacco-Vanille-100ml.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },
  {
    id: "baccarat-rouge",
    name: "Baccarat Rouge 540",
    price: 35,
    category: "Fragrances",
    colors: "EDP, Extrait, Hair Mist",
    images: [
      "https://images.stockx.com/images/Maison-Francis-Kurkdjian-Baccarat-Rouge-540-Eau-de-Parfum-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Maison-Francis-Kurkdjian-Baccarat-Rouge-540-Eau-de-Parfum-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  },

  // ─── TECH ────────────────────────────────────────
  {
    id: "airpods-case",
    name: "Custom AirPods Case",
    price: 15,
    category: "Tech",
    colors: "Black, White, Chrome Hearts, LV",
    images: [
      "https://images.stockx.com/images/Apple-AirPods-Pro-2-USB-C-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp",
      "https://images.stockx.com/images/Apple-AirPods-Pro-2-USB-C-2024.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp"
    ]
  }
];

const CATEGORIES = ["All", "Tops", "Bottoms", "Shoes", "Accessories", "Fragrances", "Tech"];
