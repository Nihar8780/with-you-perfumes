/*==========================================================
  WITH YOU - Luxury Perfume Store
  PRODUCT RENDER JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    renderProducts(PRODUCTS);

});

/*=========================================
  PRODUCT CONTAINER
=========================================*/

const productContainer = document.getElementById("productContainer");

/*=========================================
  RENDER PRODUCTS
=========================================*/

function renderProducts(products){

    if(!productContainer) return;

    productContainer.innerHTML = "";

    if(products.length === 0){

        productContainer.innerHTML = `

            <div class="col-12 text-center py-5">

                <h3>No Products Found</h3>

                <p>Please try another category.</p>

            </div>

        `;

        return;

    }

    products.forEach(product => {

        productContainer.innerHTML += createProductCard(product);

    });

}

/*=========================================
  CREATE PRODUCT CARD
=========================================*/

function createProductCard(product){

    return `

<div class="col-xl-3 col-lg-4 col-md-6 mb-4">

<div class="card product-card h-100 border-0 shadow-sm">

<div class="product-image position-relative">

<img
src="${product.image}"
alt="${product.name}"
class="card-img-top img-fluid"
loading="lazy"
>

<span class="badge bg-dark position-absolute top-0 start-0 m-3">

${product.badge}

</span>

<button
class="wishlist-btn position-absolute top-0 end-0 m-3"
data-id="${product.id}"
>

<i class="fa-regular fa-heart"></i>

</button>

</div>

<div class="card-body">

<p class="text-muted small mb-1">

${product.brand}

</p>

<h5 class="product-title">

${product.name}

</h5>

<div class="rating mb-2">

${generateStars(product.rating)}

<span class="ms-2">

(${product.reviews})

</span>

</div>

<div class="price mb-3">

<span class="fw-bold text-success">

₹${product.price.toLocaleString("en-IN")}

</span>

<del class="ms-2 text-muted">

₹${product.oldPrice.toLocaleString("en-IN")}

</del>

</div>

<div class="d-grid gap-2">

<button

class="btn btn-success add-cart"

data-id="${product.id}"

>

<i class="fa-solid fa-cart-shopping"></i>

Add To Cart

</button>

<button

class="btn btn-outline-dark buy-now"

data-id="${product.id}"

>

Buy Now

</button>

<button

class="btn btn-outline-secondary quick-view"

data-id="${product.id}"

>

Quick View

</button>

</div>

</div>

</div>

</div>

`;

}

/*=========================================
  STAR RATING
=========================================*/

function generateStars(rating){

    let html="";

    const full=Math.floor(rating);

    const half=rating%1!==0;

    for(let i=1;i<=5;i++){

        if(i<=full){

            html+=`<i class="fa-solid fa-star text-warning"></i>`;

        }

        else if(i===full+1 && half){

            html+=`<i class="fa-solid fa-star-half-stroke text-warning"></i>`;

        }

        else{

            html+=`<i class="fa-regular fa-star text-warning"></i>`;

        }

    }

    return html;

}

/*=========================================
  GET PRODUCT
=========================================*/

function getProductById(id){

    return PRODUCTS.find(product=>product.id==id);

}

/*=========================================
  FEATURED PRODUCTS
=========================================*/

function renderFeaturedProducts(){

    const featured = PRODUCTS.filter(

        product => product.featured

    );

    renderProducts(featured);

}

/*=========================================
  NEW ARRIVALS
=========================================*/

function renderNewArrivals(){

    const products = PRODUCTS.filter(

        product => product.newArrival

    );

    renderProducts(products);

}

/*=========================================
  BEST SELLERS
=========================================*/

function renderBestSellers(){

    const products = PRODUCTS.filter(

        product => product.badge === "BEST SELLER"

    );

    renderProducts(products);

}

/*=========================================
  SALE PRODUCTS
=========================================*/

function renderSaleProducts(){

    const products = PRODUCTS.filter(

        product => product.sale

    );

    renderProducts(products);

}

/*=========================================
  PRODUCT COUNT
=========================================*/

function updateProductCount(){

    const counter = document.getElementById("productCount");

    if(counter){

        counter.innerHTML = PRODUCTS.length;

    }

}

updateProductCount();
