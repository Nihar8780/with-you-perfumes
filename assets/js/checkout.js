/*==========================================================
  WITH YOU - Luxury Perfume Store
  CHECKOUT JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initializeCheckout();

});

/*=========================================
  INITIALIZE
=========================================*/

function initializeCheckout(){

    loadOrderSummary();

    paymentMethod();

    placeOrder();

}

/*=========================================
  PAYMENT METHOD
=========================================*/

function paymentMethod(){

    const methods=document.querySelectorAll(

        "input[name='payment']"

    );

    methods.forEach(method=>{

        method.addEventListener("change",()=>{

            const card=document.getElementById("cardSection");

            const upi=document.getElementById("upiSection");

            if(card) card.style.display="none";

            if(upi) upi.style.display="none";

            switch(method.value){

                case "card":

                    if(card) card.style.display="block";

                break;

                case "upi":

                case "gpay":

                case "paytm":

                    if(upi) upi.style.display="block";

                break;

            }

        });

    });

}

/*=========================================
  ORDER SUMMARY
=========================================*/

function loadOrderSummary(){

    const summary=document.getElementById("orderSummary");

    if(!summary) return;

    summary.innerHTML=`

        <div class="checkout-summary">

            <h5>Luxury Perfume</h5>

            <p>Premium Collection</p>

            <h4>₹8,999</h4>

        </div>

    `;

}

/*=========================================
  VALIDATION
=========================================*/

function validateCheckout(){

    const form=document.getElementById("checkoutForm");

    if(!form) return false;

    return form.checkValidity();

}

/*=========================================
  PLACE ORDER
=========================================*/

function placeOrder(){

    const button=document.getElementById("placeOrder");

    if(!button) return;

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        if(!validateCheckout()){

            alert("Please fill all required details.");

            return;

        }

        alert("🎉 Order Placed Successfully!");

        localStorage.removeItem("withyou-cart");

        window.location.href="../index.html";

    });

}

/*=========================================
  APPLY COUPON
=========================================*/

function applyCoupon(code){

    console.log("Coupon :",code);

}

/*=========================================
  PAYMENT SUCCESS
=========================================*/

function paymentSuccess(){

    console.log("Payment Successful");

}

/*=========================================
  EXPORT
=========================================*/

window.applyCoupon=applyCoupon;
window.paymentSuccess=paymentSuccess;
