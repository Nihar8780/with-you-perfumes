/*==========================================================
  WITH YOU - Luxury Perfume Store
  CART.JS
  PART 2 - CART RENDER ENGINE
==========================================================*/

"use strict";

/*==========================================================
  RENDER CART
==========================================================*/

function renderCart(){

    const cartContainer=document.querySelector(".cart-items");

    const subtotalElement=document.querySelector(".cart-subtotal");

    const totalElement=document.querySelector(".cart-total");

    const emptyState=document.querySelector(".empty-cart");

    if(!cartContainer) return;

    cartContainer.innerHTML="";

    if(cart.length===0){

        if(emptyState){

            emptyState.style.display="block";

        }

        subtotalElement && (subtotalElement.innerHTML=formatCurrency(0));

        totalElement && (totalElement.innerHTML=formatCurrency(0));

        return;

    }

    if(emptyState){

        emptyState.style.display="none";

    }

    cart.forEach(item=>{

        cartContainer.appendChild(

            createCartItem(item)

        );

    });

    updateCartSummary();

}

/*==========================================================
  CREATE ITEM
==========================================================*/

function createCartItem(item){

    const card=document.createElement("div");

    card.className="cart-item";

    card.innerHTML=`

        <div class="cart-image">

            <img src="${item.image}"

            alt="${item.name}">

        </div>

        <div class="cart-content">

            <h5>${item.name}</h5>

            <small>${item.brand}</small>

            <div class="cart-price">

                ${formatCurrency(item.price)}

            </div>

        </div>

        <div class="cart-quantity">

            <button

            class="qty-minus"

            data-id="${item.id}">

            -

            </button>

            <input

            type="number"

            min="1"

            value="${item.quantity}"

            data-id="${item.id}"

            class="qty-input">

            <button

            class="qty-plus"

            data-id="${item.id}">

            +

            </button>

        </div>

        <div class="cart-total-price">

            ${formatCurrency(

                item.price*item.quantity

            )}

        </div>

        <button

        class="remove-cart"

        data-id="${item.id}">

        <i class="fa-solid fa-trash"></i>

        </button>

    `;

    return card;

}

/*==========================================================
  SUMMARY
==========================================================*/

function updateCartSummary(){

    const subtotal=getCartSubtotal();

    const shipping=

    subtotal>3000?0:149;

    const gst=

    subtotal*0.18;

    const total=

    subtotal+shipping+gst;

    const subtotalElement=

    document.querySelector(".cart-subtotal");

    const shippingElement=

    document.querySelector(".cart-shipping");

    const gstElement=

    document.querySelector(".cart-gst");

    const totalElement=

    document.querySelector(".cart-total");

    subtotalElement &&

    (subtotalElement.innerHTML=

    formatCurrency(subtotal));

    shippingElement &&

    (shippingElement.innerHTML=

    shipping===0?

    "FREE":

    formatCurrency(shipping));

    gstElement &&

    (gstElement.innerHTML=

    formatCurrency(gst));

    totalElement &&

    (totalElement.innerHTML=

    formatCurrency(total));

}

/*==========================================================
  EVENT DELEGATION
==========================================================*/

document.addEventListener("click",event=>{

    if(event.target.classList.contains("qty-plus")){

        const id=event.target.dataset.id;

        const item=findCartItem(id);

        if(item){

            updateQuantity(

                id,

                item.quantity+1

            );

        }

    }

    if(event.target.classList.contains("qty-minus")){

        const id=event.target.dataset.id;

        const item=findCartItem(id);

        if(item){

            updateQuantity(

                id,

                item.quantity-1

            );

        }

    }

    if(

        event.target.closest(".remove-cart")

    ){

        const button=

        event.target.closest(

            ".remove-cart"

        );

        removeFromCart(

            button.dataset.id

        );

    }

});

/*==========================================================
  INPUT CHANGE
==========================================================*/

document.addEventListener("change",event=>{

    if(

        event.target.classList.contains(

            "qty-input"

        )

    ){

        updateQuantity(

            event.target.dataset.id,

            event.target.value

        );

    }

});

/*==========================================================
  MINI CART
==========================================================*/

function renderMiniCart(){

    const count=document.querySelector(

        ".mini-cart-count"

    );

    const total=document.querySelector(

        ".mini-cart-total"

    );

    if(count){

        count.innerHTML=

        getCartItemCount();

    }

    if(total){

        total.innerHTML=

        formatCurrency(

            getCartSubtotal()

        );

    }

}

/*==========================================================
  INIT
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    renderCart();

   
