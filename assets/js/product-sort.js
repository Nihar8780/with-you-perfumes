/*==========================================================
  WITH YOU - Luxury Perfume Store
  PRODUCT SORT JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initProductSorting();

});

/*=========================================
  SORT INITIALIZATION
=========================================*/

function initProductSorting(){

    const sortSelect = document.getElementById("sortProducts");

    if(!sortSelect) return;

    sortSelect.addEventListener("change",(e)=>{

        sortProducts(e.target.value);

    });

}

/*=========================================
  SORT PRODUCTS
=========================================*/

function sortProducts(type){

    let sorted = [...PRODUCTS];

    switch(type){

        case "featured":

            sorted = sorted.filter(product => product.featured);
            break;

        case "newest":

            sorted.sort((a,b)=> b.id-a.id);
            break;

        case "best-selling":

            sorted.sort((a,b)=> b.reviews-a.reviews);
            break;

        case "rating":

            sorted.sort((a,b)=> b.rating-a.rating);
            break;

        case "price-low":

            sorted.sort((a,b)=> a.price-b.price);
            break;

        case "price-high":

            sorted.sort((a,b)=> b.price-a.price);
            break;

        case "name-asc":

            sorted.sort((a,b)=> a.name.localeCompare(b.name));
            break;

        case "name-desc":

            sorted.sort((a,b)=> b.name.localeCompare(a.name));
            break;

        case "discount":

            sorted.sort((a,b)=>{

                const discountA = a.oldPrice-a.price;
                const discountB = b.oldPrice-b.price;

                return discountB-discountA;

            });

            break;

        default:

            sorted=[...PRODUCTS];

    }

    renderProducts(sorted);

    updateSortingLabel(type);

}

/*=========================================
  UPDATE LABEL
=========================================*/

function updateSortingLabel(type){

    const label=document.getElementById("currentSort");

    if(!label) return;

    const names={

        "featured":"Featured",

        "newest":"Newest",

        "best-selling":"Best Selling",

        "rating":"Top Rated",

        "price-low":"Price : Low to High",

        "price-high":"Price : High to Low",

        "name-asc":"A - Z",

        "name-desc":"Z - A",

        "discount":"Highest Discount"

    };

    label.textContent = names[type] || "Featured";

}

/*=========================================
  RESET SORT
=========================================*/

function resetSorting(){

    renderProducts(PRODUCTS);

    const select=document.getElementById("sortProducts");

    if(select){

        select.value="featured";

    }

}

/*=========================================
  FEATURED PRODUCTS
=========================================*/

function showFeaturedProducts(){

    renderProducts(

        PRODUCTS.filter(product=>product.featured)

    );

}

/*=========================================
  SALE PRODUCTS
=========================================*/

function showSaleProducts(){

    renderProducts(

        PRODUCTS.filter(product=>product.sale)

    );

}

/*=========================================
  NEW ARRIVALS
=========================================*/

function showNewArrivals(){

    renderProducts(

        PRODUCTS.filter(product=>product.newArrival)

    );

}

/*=========================================
  BEST RATED
=========================================*/

function showTopRated(){

    const products=[...PRODUCTS];

    products.sort((a,b)=>b.rating-a.rating);

    renderProducts(products);

}

/*=========================================
  PRICE HELPERS
=========================================*/

function sortPriceAscending(){

    sortProducts("price-low");

}

function sortPriceDescending(){

    sortProducts("price-high");

}

/*=========================================
  NAME HELPERS
=========================================*/

function sortNameAscending(){

    sortProducts("name-asc");

}

function sortNameDescending(){

    sortProducts("name-desc");

}

/*=========================================
  EXPORT
=========================================*/

window.sortProducts = sortProducts;
window.resetSorting = resetSorting;
