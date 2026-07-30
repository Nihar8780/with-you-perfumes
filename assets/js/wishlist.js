/*==========================================================
  WITH YOU - Luxury Perfume Store
  WISHLIST JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  LOCAL STORAGE KEY
=========================================*/

const WISHLIST_KEY = "withyou-wishlist";

/*=========================================
  LOAD WISHLIST
=========================================*/

let wishlist = JSON.parse(

    localStorage.getItem(WISHLIST_KEY)

) || [];

/*=========================================
  SAVE
=========================================*/

function saveWishlist(){

    localStorage.setItem(

        WISHLIST_KEY,

        JSON.stringify(wishlist)

    );

    updateWishlistCount();

}

/*=========================================
  ADD TO WISHLIST
=========================================*/

function addToWishlist(id){

    id = Number(id);

    if(wishlist.includes(id)){

        showWishlistToast("Already in Wishlist");

        return;

    }

    wishlist.push(id);

    saveWishlist();

    renderWishlist();

    showWishlistToast("Added to Wishlist");

}

/*=========================================
  REMOVE
=========================================*/

function removeFromWishlist(id){

    wishlist = wishlist.filter(

        item => item !== Number(id)

    );

    saveWishlist();

    renderWishlist();

}

/*=========================================
  TOGGLE
=========================================*/

function toggleWishlist(id){

    id = Number(id);

    if(wishlist.includes(id)){

        removeFromWishlist(id);

    }else{

        addToWishlist(id);

    }

}

/*=========================================
  RENDER
=========================================*/

function renderWishlist(){

    const container = document.getElementById(

        "wishlistContainer"

    );

    if(!container) return;

    container.innerHTML = "";

    const items = PRODUCTS.filter(product =>

        wishlist.includes(product.id)

    );

    if(items.length===0){

        container.innerHTML = `

        <div class="text-center py-5">

            <h3>Your Wishlist is Empty</h3>

            <p>Add your favourite perfumes.</p>

        </div>

        `;

        return;

    }

    items.forEach(product=>{

        container.innerHTML += `

<div class="wishlist-item d-flex align-items-center mb-3">

<img
src="${product.image}"
width="90"
class="rounded me-3"
>

<div class="flex-grow-1">

<h6>${product.name}</h6>

<p class="mb-1">

${product.brand}

</p>

<strong>

₹${product.price.toLocaleString("en-IN")}

</strong>

</div>

<div>

<button

class="btn btn-success btn-sm"

onclick="addToCart(${product.id})"

>

Add To Cart

</button>

<button

class="btn btn-outline-danger btn-sm ms-2"

onclick="removeFromWishlist(${product.id})"

>

<i class="fa-solid fa-trash"></i>

</button>

</div>

</div>

`;

    });

}

/*=========================================
  COUNT
=========================================*/

function updateWishlistCount(){

    const count=document.querySelector(

        ".wishlist-count"

    );

    if(count){

        count.textContent=wishlist.length;

    }

}

/*=========================================
  TOAST
=========================================*/

function showWishlistToast(message){

    console.log(message);

}

/*=========================================
  CHECK
=========================================*/

function isWishlisted(id){

    return wishlist.includes(Number(id));

}

/*=========================================
  CLEAR
=========================================*/

function clearWishlist(){

    wishlist=[];

    saveWishlist();

    renderWishlist();

}

/*=========================================
  INITIALIZE
=========================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        renderWishlist();

        updateWishlistCount();

    }

);

/*=========================================
  EXPORT
=========================================*/

window.addToWishlist = addToWishlist;

window.removeFromWishlist = removeFromWishlist;

window.toggleWishlist = toggleWishlist;

window.clearWishlist = clearWishlist;
