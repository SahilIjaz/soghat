// export const categories = [
//   {
//     id: 1,
//     name: "Traditional Sweets (Mithai)",
//     shelfLife: "10–20 days",
//     categoryImage:
//       "https://d1n5l80rwxz6pi.cloudfront.net/blog/traditional-indian-sweets-found-in-a-grocery-store.jpg",
//     cityFocus: ["Multan", "Karachi", "Peshawar", "Lahore"],
//     items: [
//       {
//         name: "Multani Sohan Halwa",
//         city: "Multan",
//         description:
//           "Rich, ghee-based halwa with almonds, pistachios & desi flavor. Iconic Multan specialty, perfect for gifting.",
//         packaging:
//           "Premium gift packaging available in wooden box or custom basket.",
//         image: "https://m.media-amazon.com/images/I/71c7Kx61XyL._SL1000_.jpg", // add your images in /public/images
//       },
//       {
//         name: "Karachi Rabri",
//         city: "Karachi",
//         description:
//           "Thick, creamy milk-based delight — rich taste and long shelf life when packed properly.",
//         packaging: "Vacuum-sealed box available for freshness.",
//         image:
//           "https://newdilpasand.com/wp-content/uploads/2022/03/IMG_0850.jpg",
//       },
//       {
//         name: "Peshawari Patisa",
//         city: "Peshawar",
//         description:
//           "Crunchy, layered sweet with ghee aroma and nut topping. Highly loved during Eid and weddings.",
//         packaging: "",
//         image:
//           "https://i0.wp.com/alkhairsweets.com.pk/wp-content/uploads/2022/11/Chocolate-Patisa-900-scaled.webp?fit=2560%2C1707&ssl=1",
//       },
//       {
//         name: "Lahori Pera",
//         city: "Lahore",
//         description:
//           "Milky soft mithai with balanced sweetness — famous from Gawalmandi.",
//         packaging: "Small jars and gift boxes available.",
//         image:
//           "https://cdn-food.tribune.com.pk/gallery/kyzw9BVgHFNHvKs2Q9kYcJzgSHxBXwlApyw41IVF.jpeg",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Dry Fruits & Nuts",
//     categoryImage:
//       "https://www.mevabite.com/cdn/shop/articles/Dry-Fruits-Nuts-Seeds.jpg?v=1725083016",
//     shelfLife: "3–6 months",
//     cityFocus: ["Gilgit", "Quetta", "Swat"],
//     items: [
//       {
//         name: "Gilgit Walnuts",
//         city: "Gilgit",
//         description:
//           "Organically sourced mountain walnuts — fresh, crunchy, high in nutrition.",
//         packaging: "Available in resealable pouches or gift jars.",
//         image:
//           "https://media.istockphoto.com/id/1702572826/photo/walnut-tree-with-big-nuts-in-green-shell-close-up-harvesting-time.jpg?s=612x612&w=0&k=20&c=ZWYIshojvt8of-gYxYHPr8uQ5iDMEg3szS5UJLwIaaE=",
//       },
//       {
//         name: "Quetta Almonds",
//         city: "Quetta",
//         description:
//           "Locally harvested almonds known for rich oil content and strong aroma.",
//         packaging: "Premium roasted & salted option available.",
//         image:
//           "https://eu-images.contentstack.com/v3/assets/blt7a82e963f79cc4ec/blt465e331f64dd8434/64b547f5b1152f17e44e0311/almonds_4.jpg?width=1280&auto=webp&quality=80&disable=upscale",
//       },
//       {
//         name: "Swat Dried Apricots",
//         city: "Swat",
//         description:
//           "Naturally sun-dried, sweet, chewy, and fiber-rich. Ideal for snacks and desserts.",
//         packaging: "",
//         image:
//           "https://www.mundus-agri.eu/images/news/cache/31122_landscape_large.jpeg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Natural & Pure Products",
//     categoryImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrApBh03ygrp7msbJz2Ig-utXYaJoaUwN_pahdaKNbqthkP4WcOs2TpzkJvBS8fK2j9Q&usqp=CAU",
//     shelfLife: "6–12 months",
//     cityFocus: ["Hunza", "Chitral", "Skardu"],
//     items: [
//       {
//         name: "Hunza Organic Honey",
//         city: "Hunza",
//         description:
//           "100% pure, unprocessed honey directly from northern beekeepers.",
//         packaging: "Can be packaged in glass jars or honeycomb boxes.",
//         image:
//           "https://us.123rf.com/450wm/yanadjana/yanadjana2402/yanadjana240201366/226042001-honey-in-the-garden-in-a-jar-selective-focus-food.jpg?ver=6",
//       },
//       {
//         name: "Chitral Desi Ghee",
//         city: "Chitral",
//         description:
//           "Handmade from cow milk, with strong aroma and natural richness.",
//         packaging: "Glass jar and wooden gift pot options available.",
//         image: "https://5.imimg.com/data5/PX/UR/MY-22812894/organic-ghee.jpg",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Traditional Pickles & Snacks",
//     categoryImage:
//       "https://savithrammas.com/site/image/cache/catalog/A-Guide-to-Savithrammas-Exotic-Pickles-and-Spices-1080x540.jpg",
//     shelfLife: "4–6 months",
//     cityFocus: ["Sindh", "Punjab"],
//     items: [
//       {
//         name: "Sindhi Mango Pickle",
//         city: "Sindh",
//         description:
//           "Tangy, spicy, oil-based mango pickle prepared with traditional masalas.",
//         packaging: "Available in mini jars and full-size packs.",
//         image:
//           "https://www.pansnovens.com/blog/wp-content/uploads/2021/05/aam-ka-achar-4.jpg",
//       },
//       {
//         name: "Punjabi Mixed Pickle",
//         city: "Punjab",
//         description:
//           "Classic mixed vegetable achar with mustard oil flavor — evergreen taste loved nationwide.",
//         packaging: "Glass jars with seal-proof lids.",
//         image:
//           "https://bhojmasale.com/cdn/shop/articles/gajar-mooli-achar-recipe-446616_1024x1024.webp?v=1739152941",
//       },
//       {
//         name: "Multani Papad",
//         city: "Multan",
//         description:
//           "Sun-dried lentil wafers with spicy flavor — easy to fry or roast, travel-friendly.",
//         packaging: "",
//         image:
//           "https://m.media-amazon.com/images/I/51aaGIsBzAL._UF1000,1000_QL80_.jpg",
//       },
//     ],
//   },
// ];
export const categories = [
  {
    id: 1,
    name: "Traditional Sweets (Mithai)",
    shelfLife: "10–20 days",
    categoryImage:
      "https://d1n5l80rwxz6pi.cloudfront.net/blog/traditional-indian-sweets-found-in-a-grocery-store.jpg",
    cityFocus: ["Multan", "Karachi", "Peshawar", "Lahore"],
    items: [
      {
        id: 101,
        name: "Multani Sohan Halwa",
        city: "Multan",
        description:
          "Rich, ghee-based halwa with almonds, pistachios & desi flavor. Iconic Multan specialty, perfect for gifting.",
        packaging:
          "Premium gift packaging available in wooden box or custom basket.",
        image: "https://m.media-amazon.com/images/I/71c7Kx61XyL._SL1000_.jpg",
        price: 1200,
        weight: "1 kg",
      },
      {
        id: 102,
        name: "Karachi Rabri",
        city: "Karachi",
        description:
          "Thick, creamy milk-based delight — rich taste and long shelf life when packed properly.",
        packaging: "Vacuum-sealed box available for freshness.",
        image:
          "https://newdilpasand.com/wp-content/uploads/2022/03/IMG_0850.jpg",
        price: 950,
        weight: "500g",
      },
      {
        id: 103,
        name: "Peshawari Patisa",
        city: "Peshawar",
        description:
          "Crunchy, layered sweet with ghee aroma and nut topping. Highly loved during Eid and weddings.",
        packaging: "",
        image:
          "https://i0.wp.com/alkhairsweets.com.pk/wp-content/uploads/2022/11/Chocolate-Patisa-900-scaled.webp?fit=2560%2C1707&ssl=1",
        price: 850,
        weight: "750g",
      },
      {
        id: 104,
        name: "Lahori Pera",
        city: "Lahore",
        description:
          "Milky soft mithai with balanced sweetness — famous from Gawalmandi.",
        packaging: "Small jars and gift boxes available.",
        image:
          "https://cdn-food.tribune.com.pk/gallery/kyzw9BVgHFNHvKs2Q9kYcJzgSHxBXwlApyw41IVF.jpeg",
        price: 700,
        weight: "500g",
      },
    ],
  },
  {
    id: 2,
    name: "Dry Fruits & Nuts",
    categoryImage:
      "https://www.mevabite.com/cdn/shop/articles/Dry-Fruits-Nuts-Seeds.jpg?v=1725083016",
    shelfLife: "3–6 months",
    cityFocus: ["Gilgit", "Quetta", "Swat"],
    items: [
      {
        id: 201,
        name: "Gilgit Walnuts",
        city: "Gilgit",
        description:
          "Organically sourced mountain walnuts — fresh, crunchy, high in nutrition.",
        packaging: "Available in resealable pouches or gift jars.",
        image:
          "https://media.istockphoto.com/id/1702572826/photo/walnut-tree-with-big-nuts-in-green-shell-close-up-harvesting-time.jpg?s=612x612&w=0&k=20&c=ZWYIshojvt8of-gYxYHPr8uQ5iDMEg3szS5UJLwIaaE=",
        price: 1800,
        weight: "1 kg",
      },
      {
        id: 202,
        name: "Quetta Almonds",
        city: "Quetta",
        description:
          "Locally harvested almonds known for rich oil content and strong aroma.",
        packaging: "Premium roasted & salted option available.",
        image:
          "https://eu-images.contentstack.com/v3/assets/blt7a82e963f79cc4ec/blt465e331f64dd8434/64b547f5b1152f17e44e0311/almonds_4.jpg?width=1280&auto=webp&quality=80&disable=upscale",
        price: 2200,
        weight: "1 kg",
      },
      {
        id: 203,
        name: "Swat Dried Apricots",
        city: "Swat",
        description:
          "Naturally sun-dried, sweet, chewy, and fiber-rich. Ideal for snacks and desserts.",
        packaging: "",
        image:
          "https://www.mundus-agri.eu/images/news/cache/31122_landscape_large.jpeg",
        price: 1500,
        weight: "500g",
      },
    ],
  },
  {
    id: 3,
    name: "Natural & Pure Products",
    categoryImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrApBh03ygrp7msbJz2Ig-utXYaJoaUwN_pahdaKNbqthkP4WcOs2TpzkJvBS8fK2j9Q&usqp=CAU",
    shelfLife: "6–12 months",
    cityFocus: ["Hunza", "Chitral", "Skardu"],
    items: [
      {
        id: 301,
        name: "Hunza Organic Honey",
        city: "Hunza",
        description:
          "100% pure, unprocessed honey directly from northern beekeepers.",
        packaging: "Can be packaged in glass jars or honeycomb boxes.",
        image:
          "https://us.123rf.com/450wm/yanadjana/yanadjana2402/yanadjana240201366/226042001-honey-in-the-garden-in-a-jar-selective-focus-food.jpg?ver=6",
        price: 2500,
        weight: "1 kg",
      },
      {
        id: 302,
        name: "Chitral Desi Ghee",
        city: "Chitral",
        description:
          "Handmade from cow milk, with strong aroma and natural richness.",
        packaging: "Glass jar and wooden gift pot options available.",
        image: "https://5.imimg.com/data5/PX/UR/MY-22812894/organic-ghee.jpg",
        price: 3200,
        weight: "1 kg",
      },
    ],
  },
  {
    id: 4,
    name: "Traditional Pickles & Snacks",
    categoryImage:
      "https://savithrammas.com/site/image/cache/catalog/A-Guide-to-Savithrammas-Exotic-Pickles-and-Spices-1080x540.jpg",
    shelfLife: "4–6 months",
    cityFocus: ["Sindh", "Punjab"],
    items: [
      {
        id: 401,
        name: "Sindhi Mango Pickle",
        city: "Sindh",
        description:
          "Tangy, spicy, oil-based mango pickle prepared with traditional masalas.",
        packaging: "Available in mini jars and full-size packs.",
        image:
          "https://www.pansnovens.com/blog/wp-content/uploads/2021/05/aam-ka-achar-4.jpg",
        price: 650,
        weight: "500g",
      },
      {
        id: 402,
        name: "Punjabi Mixed Pickle",
        city: "Punjab",
        description:
          "Classic mixed vegetable achar with mustard oil flavor — evergreen taste loved nationwide.",
        packaging: "Glass jars with seal-proof lids.",
        image:
          "https://bhojmasale.com/cdn/shop/articles/gajar-mooli-achar-recipe-446616_1024x1024.webp?v=1739152941",
        price: 700,
        weight: "500g",
      },
      {
        id: 403,
        name: "Multani Papad",
        city: "Multan",
        description:
          "Sun-dried lentil wafers with spicy flavor — easy to fry or roast, travel-friendly.",
        packaging: "",
        image:
          "https://m.media-amazon.com/images/I/51aaGIsBzAL._UF1000,1000_QL80_.jpg",
        price: 350,
        weight: "250g",
      },
    ],
  },
];
