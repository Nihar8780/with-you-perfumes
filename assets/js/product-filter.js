/*==========================================================
  WITH YOU - Luxury Perfume Store
  PRODUCT FILTER JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  FILTER STATE
=========================================*/

const FILTER_STATE = {

    brand : "All",

    category : "All",

    minPrice : 0,

    maxPrice : 999999,

    rating : 0,

    sale : false,

    featured : false,

    newArrival : false,

    stock : false,

    search : ""

};

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initBrandFilter();

    initCategoryFilter();

    initPriceFilter();

    initSearchFilter();

});

/*=========================================
  BRAND FILTER
=========================================*/

function initBrandFilter(){

    const buttons=document.querySelectorAll("[data-brand]");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            FILTER_STATE.brand=button.dataset.brand;

            applyFilters();

        });

    });

}

/*=========================================
  CATEGORY FILTER
=========================================*/

function initCategoryFilter(){

    const buttons=document.querySelectorAll("[data-category]");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            FILTER_STATE.category=button.dataset.category;

            applyFilters();

        });

    });

}

/*=========================================
  PRICE FILTER
=========================================*/

function initPriceFilter(){

    const min=document.getElementById("minPrice");

    const max=document.getElementById("maxPrice");

    if(min){

        min.addEventListener("input",()=>{

            FILTER_STATE.minPrice=Number(min.value);

            applyFilters();

        });

    }

    if(max){

        max.addEventListener("input",()=>{

            FILTER_STATE.maxPrice=Number(max.value);

            applyFilters();

        });

    }

}

/*=========================================
  SEARCH
=========================================*/

function initSearchFilter(){

    const input=document.getElementById("productSearch");

    if(!input) return;

    input.addEventListener("input",()=>{

        FILTER_STATE.search=input.value.toLowerCase();

        applyFilters();

    });

}

/*=========================================
  APPLY FILTERS
=========================================*/

function applyFilters(){

    let filtered=[...PRODUCTS];

    /*--------------------------
      BRAND
    --------------------------*/

    if(FILTER_STATE.brand!=="All"){

        filtered=filtered.filter(product=>

            product.brand===FILTER_STATE.brand

        );

    }

    /*--------------------------
      CATEGORY
    --------------------------*/

    if(FILTER_STATE.category!=="All"){

        filtered=filtered.filter(product=>

            product.category===FILTER_STATE.category

        );

    }

    /*--------------------------
      PRICE
    --------------------------*/

    filtered=filtered.filter(product=>

        product.price>=FILTER_STATE.minPrice &&

        product.price<=FILTER_STATE.maxPrice

    );

    /*--------------------------
      SEARCH
    --------------------------*/

    if(FILTER_STATE.search!==""){

        filtered=filtered.filter(product=>

            product.name.toLowerCase().includes(FILTER_STATE.search) ||

            product.brand.toLowerCase().includes(FILTER_STATE.search)

        );

    }

    renderProducts(filtered);

}

/*=========================================
  RESET FILTERS
=========================================*/

function clearAllFilters(){

    FILTER_STATE.brand="All";

    FILTER_STATE.category="All";

    FILTER_STATE.minPrice=0;

    FILTER_STATE.maxPrice=999999;

    FILTER_STATE.rating=0;

    FILTER_STATE.sale=false;

    FILTER_STATE.featured=false;

    FILTER_STATE.newArrival=false;

    FILTER_STATE.stock=false;

    FILTER_STATE.search="";

    renderProducts(PRODUCTS);

}

/*=========================================
  EXPORT
=========================================*/

window.applyFilters=applyFilters;

window.clearAllFilters=clearAllFilters;
