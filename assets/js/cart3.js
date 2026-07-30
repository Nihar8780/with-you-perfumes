/*==========================================================
  WITH YOU - Luxury Perfume Store
  CART.JS
  PART 4 - CHECKOUT & ORDER ENGINE
==========================================================*/

"use strict";

/*==========================================================
  ORDER STORAGE
==========================================================*/

const ORDER_STORAGE_KEY = "withyou_orders";

/*==========================================================
  GENERATE ORDER ID
==========================================================*/

function generateOrderID(){

    return "WY-" +

    Date.now() +

    "-" +

    Math.floor(Math.random()*1000);

}

/*==========================================================
  GET ORDER DATA
==========================================================*/

function createOrder(){

    const totals = calculateGrandTotal();

    return{

        orderId:generateOrderID(),

        date:new Date().toISOString(),

        items:[...cart],

        itemCount:getCartItemCount(),

        subtotal:totals.subtotal,

        discount:totals.discount,

        rewards:totals.rewards,

        shipping:totals.shipping,

        gst:totals.gst,

        total:totals.total,

        paymentMethod:null,

        paymentStatus:"Pending",

        orderStatus:"Placed"

    };

}

/*==========================================================
  SAVE ORDER
==========================================================*/

function saveOrder(order){

    let orders = JSON.parse(

        localStorage.getItem(ORDER_STORAGE_KEY)

    ) || [];

    orders.unshift(order);

    localStorage.setItem(

        ORDER_STORAGE_KEY,

        JSON.stringify(orders)

    );

}

/*==========================================================
  BUY NOW
==========================================================*/

function buyNow(product){

    cart=[];

    cart.push({

        id:product.id,

        name:product.name,

        image:product.image,

        brand:product.brand,

        price:Number(product.price),

        quantity:1

    });

    saveCart();

    window.location.href="checkout.html";

}

/*==========================================================
  PAYMENT
==========================================================*/

function placeOrder(paymentMethod){

    if(cart.length===0){

        showToast(

            "Cart is Empty",

            "error"

        );

        return;

    }

    const order = createOrder();

    order.paymentMethod = paymentMethod;

    order.paymentStatus = "Paid";

    saveOrder(order);

    clearCart();

    showToast(

        "Order Placed Successfully"

    );

    setTimeout(()=>{

        window.location.href=

        "thank-you.html";

    },1200);

}

/*==========================================================
  PAYMENT BUTTONS
==========================================================*/

document.addEventListener("click",event=>{

    if(event.target.matches(".pay-gpay")){

        placeOrder("Google Pay");

    }

    if(event.target.matches(".pay-paytm")){

        placeOrder("Paytm");

    }

    if(event.target.matches(".pay-card")){

        placeOrder("Credit / Debit Card");

    }

    if(event.target.matches(".pay-cod")){

        placeOrder("Cash on Delivery");

    }

});

/*==========================================================
  ORDER SUMMARY
==========================================================*/

function renderOrderSummary(){

    const box = document.querySelector(

        ".order-summary"

    );

    if(!box) return;

    const totals = calculateGrandTotal();

    box.innerHTML = `

        <div class="summary-row">

            <span>Items</span>

            <span>${getCartItemCount()}</span>

        </div>

        <div class="summary-row">

            <span>Subtotal</span>

            <span>${formatCurrency(totals.subtotal)}</span>

        </div>

        <div class="summary-row">

            <span>Discount</span>

            <span>- ${formatCurrency(totals.discount)}</span>

        </div>

        <div class="summary-row">

            <span>Rewards</span>

            <span>- ${formatCurrency(totals.rewards)}</span>

        </div>

        <div class="summary-row">

            <span>Shipping</span>

            <span>

            ${totals.shipping===0

            ?"FREE"

            :formatCurrency(totals.shipping)}

            </span>

        </div>

        <div class="summary-row">

            <span>GST</span>

            <span>${formatCurrency(totals.gst)}</span>

        </div>

        <hr>

        <div class="summary-row total">

            <strong>Total</strong>

            <strong>

            ${formatCurrency(totals.total)}

            </strong>

        </div>

    `;

}

/*==========================================================
  LOAD SUMMARY
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        renderOrderSummary();

    }

);

/*==========================================================
  EXPORTS
==========================================================*/

window.buyNow = buyNow;

window.placeOrder = placeOrder;

window.createOrder = createOrder;

window.renderOrderSummary = renderOrderSummary;
