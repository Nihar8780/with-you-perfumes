/*==========================================================
  WITH YOU - Luxury Perfume Store
  CART.JS
  PART 1 - CART CORE
==========================================================*/

"use strict";

/*==========================================================
  STORAGE KEYS
==========================================================*/

const CART_STORAGE_KEY = "withyou_cart";

/*==========================================================
  CART STATE
==========================================================*/

let cart = loadCart();

/*==========================================================
  LOAD CART
==========================================================*/

function loadCart() {

    try {

        const data = localStorage.getItem(CART_STORAGE_KEY);

        return data ? JSON.parse(data) : [];

    } catch (error) {

        console.error("Unable to load cart:", error);

        return [];

    }

}

/*==========================================================
  SAVE CART
==========================================================*/

function saveCart() {

    localStorage.setItem(

        CART_STORAGE_KEY,

        JSON.stringify(cart)

    );

    updateCartBadge();

}

/*==========================================================
  FIND ITEM
==========================================================*/

function findCartItem(id) {

    return cart.find(item => item.id === id);

}

/*==========================================================
  ADD TO CART
==========================================================*/

function addToCart(product) {

    if (!product || !product.id) return;

    const existing = findCartItem(product.id);

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: Number(product.price),

            image: product.image,

            brand: product.brand,

            quantity: 1

        });

    }

    saveCart();

    if (typeof showToast === "function") {

        showToast("Added to Cart");

    }

    renderCart();

}

/*==========================================================
  REMOVE ITEM
==========================================================*/

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    renderCart();

}

/*==========================================================
  UPDATE QUANTITY
==========================================================*/

function updateQuantity(id, quantity) {

    const item = findCartItem(id);

    if (!item) return;

    item.quantity = Number(quantity);

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    renderCart();

}

/*==========================================================
  CLEAR CART
==========================================================*/

function clearCart() {

    cart = [];

    saveCart();

    renderCart();

}

/*==========================================================
  TOTAL ITEMS
==========================================================*/

function getCartItemCount() {

    return cart.reduce(

        (total, item) => total + item.quantity,

        0

    );

}

/*==========================================================
  CART SUBTOTAL
==========================================================*/

function getCartSubtotal() {

    return cart.reduce(

        (total, item) => total + (item.price * item.quantity),

        0

    );

}

/*==========================================================
  UPDATE BADGE
==========================================================*/

function updateCartBadge() {

    document

        .querySelectorAll(".cart-count")

        .forEach(badge => {

            badge.textContent = getCartItemCount();

        });

}

/*==========================================================
  INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    updateCartBadge();

});

/*==========================================================
  GLOBAL EXPORTS
==========================================================*/

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.getCartSubtotal = getCartSubtotal;
window.getCartItemCount = getCartItemCount;
