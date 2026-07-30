/*==========================================================
  WITH YOU - Luxury Perfume Store
  CART.JS
  PART 3 - COUPONS & REWARDS
==========================================================*/

"use strict";

/*==========================================================
  DEFAULT VALUES
==========================================================*/

let appliedCoupon = null;

let rewardPointsUsed = 0;

const SHIPPING_CHARGE = 149;

const FREE_SHIPPING_LIMIT = 3000;

const GST_RATE = 0.18;

/*==========================================================
  AVAILABLE COUPONS
==========================================================*/

const coupons = [

    {
        code:"WELCOME10",
        type:"percentage",
        value:10
    },

    {
        code:"WITHYOU20",
        type:"percentage",
        value:20
    },

    {
        code:"LUXURY500",
        type:"flat",
        value:500
    }

];

/*==========================================================
  APPLY COUPON
==========================================================*/

function applyCoupon(code){

    code = code.trim().toUpperCase();

    const coupon = coupons.find(

        item => item.code === code

    );

    if(!coupon){

        showToast("Invalid Coupon","error");

        return;

    }

    appliedCoupon = coupon;

    showToast("Coupon Applied");

    updateCartSummary();

}

/*==========================================================
  REMOVE COUPON
==========================================================*/

function removeCoupon(){

    appliedCoupon = null;

    rewardPointsUsed = 0;

    updateCartSummary();

}

/*==========================================================
  COUPON DISCOUNT
==========================================================*/

function getCouponDiscount(subtotal){

    if(!appliedCoupon) return 0;

    if(appliedCoupon.type==="flat"){

        return appliedCoupon.value;

    }

    return subtotal *

    (appliedCoupon.value/100);

}

/*==========================================================
  REWARD POINTS
==========================================================*/

function applyRewardPoints(points){

    rewardPointsUsed = Number(points);

    if(rewardPointsUsed<0){

        rewardPointsUsed=0;

    }

    updateCartSummary();

}

/*==========================================================
  SHIPPING
==========================================================*/

function calculateShipping(subtotal){

    if(subtotal>=FREE_SHIPPING_LIMIT){

        return 0;

    }

    return SHIPPING_CHARGE;

}

/*==========================================================
  GST
==========================================================*/

function calculateGST(amount){

    return amount * GST_RATE;

}

/*==========================================================
  FINAL TOTAL
==========================================================*/

function calculateGrandTotal(){

    const subtotal=getCartSubtotal();

    const shipping=

    calculateShipping(subtotal);

    const discount=

    getCouponDiscount(subtotal);

    const gst=

    calculateGST(

        subtotal-discount

    );

    const total=

    subtotal

    -discount

    -rewardPointsUsed

    +shipping

    +gst;

    return{

        subtotal,

        shipping,

        discount,

        gst,

        rewards:rewardPointsUsed,

        total:Math.max(total,0)

    };

}

/*==========================================================
  UPDATE SUMMARY
==========================================================*/

function updateCartSummary(){

    const data=

    calculateGrandTotal();

    setValue(

        ".cart-subtotal",

        formatCurrency(data.subtotal)

    );

    setValue(

        ".cart-discount",

        "- "+formatCurrency(data.discount)

    );

    setValue(

        ".cart-reward",

        "- "+formatCurrency(data.rewards)

    );

    setValue(

        ".cart-gst",

        formatCurrency(data.gst)

    );

    setValue(

        ".cart-shipping",

        data.shipping===0 ?

        "FREE"

        :

        formatCurrency(data.shipping)

    );

    setValue(

        ".cart-total",

        formatCurrency(data.total)

    );

}

/*==========================================================
  HELPER
==========================================================*/

function setValue(selector,value){

    const element=document.querySelector(selector);

    if(element){

        element.innerHTML=value;

    }

}

/*==========================================================
  COUPON BUTTON
==========================================================*/

document.addEventListener("click",event=>{

    if(

        event.target.classList.contains(

            "apply-coupon"

        )

    ){

        const input=document.querySelector(

            "#couponCode"

        );

        if(input){

            applyCoupon(

                input.value

            );

        }

    }

});

/*==========================================================
  REWARD INPUT
==========================================================*/

document.addEventListener("input",event=>{

    if(event.target.id==="rewardPoints"){

        applyRewardPoints(

            event.target.value

        );

    }

});

/*==========================================================
  EXPORTS
==========================================================*/

window.applyCoupon=applyCoupon;
window.removeCoupon=removeCoupon;
window.applyRewardPoints=applyRewardPoints;
window.calculateGrandTotal=calculateGrandTotal;
