/*==========================================================
  WITH YOU - Luxury Perfume Store
  PRODUCT DATABASE
  Version: 1.0
==========================================================*/

"use strict";

/*==========================================================
  PRODUCT DATABASE
==========================================================*/

const PRODUCTS = [

/*==========================================================
  GUCCI
==========================================================*/

{
    id:1,
    brand:"Gucci",
    name:"Gucci Flora Gorgeous Gardenia",
    category:"Women",
    collection:"Luxury",
    price:8999,
    oldPrice:10499,
    rating:4.9,
    reviews:254,
    stock:18,
    badge:"BEST SELLER",
    featured:true,
    newArrival:true,
    sale:true,
    image:"assets/images/products/gucci-flora.png",
    gallery:[
        "assets/images/products/gucci-flora.png",
        "assets/images/products/gucci-flora-2.png",
        "assets/images/products/gucci-flora-3.png"
    ],
    description:"Elegant floral luxury fragrance for women."
},

{
    id:2,
    brand:"Gucci",
    name:"Gucci Guilty Pour Homme",
    category:"Men",
    collection:"Luxury",
    price:7999,
    oldPrice:9499,
    rating:4.8,
    reviews:184,
    stock:20,
    badge:"HOT",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/gucci-guilty.png",
    gallery:[
        "assets/images/products/gucci-guilty.png"
    ],
    description:"Modern masculine fragrance with woody notes."
},

/*==========================================================
  PRADA
==========================================================*/

{
    id:3,
    brand:"Prada",
    name:"Prada Luna Rossa",
    category:"Men",
    collection:"Luxury",
    price:8990,
    oldPrice:9990,
    rating:4.8,
    reviews:213,
    stock:14,
    badge:"NEW",
    featured:true,
    newArrival:true,
    sale:false,
    image:"assets/images/products/prada-luna.png",
    gallery:[
        "assets/images/products/prada-luna.png"
    ],
    description:"Fresh sporty luxury fragrance."
},

{
    id:4,
    brand:"Prada",
    name:"Prada Paradoxe",
    category:"Women",
    collection:"Luxury",
    price:9299,
    oldPrice:10999,
    rating:4.9,
    reviews:166,
    stock:11,
    badge:"PREMIUM",
    featured:true,
    newArrival:true,
    sale:true,
    image:"assets/images/products/prada-paradoxe.png",
    gallery:[
        "assets/images/products/prada-paradoxe.png"
    ],
    description:"Luxury floral perfume for women."
},

/*==========================================================
  ARMANI
==========================================================*/

{
    id:5,
    brand:"Armani",
    name:"Stronger With You",
    category:"Men",
    collection:"Luxury",
    price:8499,
    oldPrice:9699,
    rating:5,
    reviews:352,
    stock:15,
    badge:"TOP RATED",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/armani-swy.png",
    gallery:[
        "assets/images/products/armani-swy.png"
    ],
    description:"Warm spicy fragrance for modern gentlemen."
},

{
    id:6,
    brand:"Armani",
    name:"Acqua Di Gio",
    category:"Men",
    collection:"Luxury",
    price:7999,
    oldPrice:9499,
    rating:4.9,
    reviews:487,
    stock:22,
    badge:"BEST SELLER",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/acqua-di-gio.png",
    gallery:[
        "assets/images/products/acqua-di-gio.png"
    ],
    description:"Iconic aquatic fragrance."
},

/*==========================================================
  DIOR
==========================================================*/

{
    id:7,
    brand:"Dior",
    name:"Dior Sauvage",
    category:"Men",
    collection:"Luxury",
    price:9999,
    oldPrice:11499,
    rating:5,
    reviews:862,
    stock:30,
    badge:"ICONIC",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/dior-sauvage.png",
    gallery:[
        "assets/images/products/dior-sauvage.png"
    ],
    description:"World-famous masculine fragrance."
},

{
    id:8,
    brand:"Dior",
    name:"Miss Dior",
    category:"Women",
    collection:"Luxury",
    price:9699,
    oldPrice:10999,
    rating:4.9,
    reviews:421,
    stock:16,
    badge:"POPULAR",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/miss-dior.png",
    gallery:[
        "assets/images/products/miss-dior.png"
    ],
    description:"Romantic floral fragrance."
},

/*==========================================================
  ZARA
==========================================================*/

{
    id:9,
    brand:"Zara",
    name:"Red Temptation",
    category:"Women",
    collection:"Premium",
    price:2990,
    oldPrice:3490,
    rating:4.7,
    reviews:1200,
    stock:45,
    badge:"TRENDING",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/red-temptation.png",
    gallery:[
        "assets/images/products/red-temptation.png"
    ],
    description:"Most loved Zara fragrance."
},

{
    id:10,
    brand:"Zara",
    name:"Vibrant Leather",
    category:"Men",
    collection:"Premium",
    price:2790,
    oldPrice:3190,
    rating:4.6,
    reviews:812,
    stock:36,
    badge:"HOT",
    featured:false,
    newArrival:false,
    sale:true,
    image:"assets/images/products/vibrant-leather.png",
    gallery:[
        "assets/images/products/vibrant-leather.png"
    ],
    description:"Fresh everyday luxury perfume."
},

/*==========================================================
  TOM FORD
==========================================================*/

{
    id:11,
    brand:"Tom Ford",
    name:"Oud Wood",
    category:"Unisex",
    collection:"Luxury",
    price:19999,
    oldPrice:21999,
    rating:5,
    reviews:316,
    stock:8,
    badge:"LUXURY",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/oud-wood.png",
    gallery:[
        "assets/images/products/oud-wood.png"
    ],
    description:"Signature luxury oud fragrance."
},

/*==========================================================
  VERSACE
==========================================================*/

{
    id:12,
    brand:"Versace",
    name:"Versace Eros",
    category:"Men",
    collection:"Luxury",
    price:8490,
    oldPrice:9990,
    rating:4.8,
    reviews:431,
    stock:19,
    badge:"TRENDING",
    featured:true,
    newArrival:false,
    sale:true,
    image:"assets/images/products/versace-eros.png",
    gallery:[
        "assets/images/products/versace-eros.png"
    ],
    description:"Powerful fresh masculine fragrance."
},

/*==========================================================
  FOGG
==========================================================*/

{
    id:13,
    brand:"Fogg",
    name:"Fogg Marco",
    category:"Men",
    collection:"Everyday",
    price:599,
    oldPrice:799,
    rating:4.5,
    reviews:2184,
    stock:70,
    badge:"VALUE",
    featured:false,
    newArrival:false,
    sale:true,
    image:"assets/images/products/fogg-marco.png",
    gallery:[
        "assets/images/products/fogg-marco.png"
    ],
    description:"Affordable long-lasting perfume."
},

{
    id:14,
    brand:"Fogg",
    name:"Fogg Impressio",
    category:"Men",
    collection:"Everyday",
    price:699,
    oldPrice:899,
    rating:4.6,
    reviews:1645,
    stock:52,
    badge:"POPULAR",
    featured:false,
    newArrival:false,
    sale:true,
    image:"assets/images/products/fogg-impressio.png",
    gallery:[
        "assets/images/products/fogg-impressio.png"
    ],
    description:"Fresh aromatic daily wear fragrance."
}

];

/*==========================================================
  AVAILABLE BRANDS
==========================================================*/

const BRANDS = [
    "All",
    "Gucci",
    "Prada",
    "Armani",
    "Dior",
    "Tom Ford",
    "Versace",
    "Zara",
    "Fogg"
];

/*==========================================================
  CATEGORIES
==========================================================*/

const CATEGORIES = [
    "All",
    "Men",
    "Women",
    "Unisex"
];

/*==========================================================
  PRICE FILTERS
==========================================================*/

const PRICE_RANGES = [

    {
        id:1,
        label:"Under ₹1,000",
        min:0,
        max:1000
    },

    {
        id:2,
        label:"₹1,000 - ₹5,000",
        min:1000,
        max:5000
    },

    {
        id:3,
        label:"₹5,000 - ₹10,000",
        min:5000,
        max:10000
    },

    {
        id:4,
        label:"Above ₹10,000",
        min:10000,
        max:999999
    }

];

/*==========================================================
  SORT OPTIONS
==========================================================*/

const SORT_OPTIONS = [

    "Featured",

    "Newest",

    "Best Selling",

    "Price Low to High",

    "Price High to Low",

    "Highest Rated"

];
