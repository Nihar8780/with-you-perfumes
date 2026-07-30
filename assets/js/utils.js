/*==========================================================
  WITH YOU - Luxury Perfume Store
  UTILITY FUNCTIONS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  CURRENCY FORMATTER
=========================================*/

function formatCurrency(amount){

    return new Intl.NumberFormat("en-IN",{

        style:"currency",

        currency:"INR",

        maximumFractionDigits:0

    }).format(amount);

}

/*=========================================
  DATE FORMAT
=========================================*/

function formatDate(date){

    return new Date(date).toLocaleDateString("en-IN",{

        day:"2-digit",

        month:"short",

        year:"numeric"

    });

}

/*=========================================
  EMAIL VALIDATION
=========================================*/

function isValidEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/*=========================================
  PHONE VALIDATION
=========================================*/

function isValidPhone(phone){

    return /^[6-9]\d{9}$/.test(phone);

}

/*=========================================
  RANDOM ID
=========================================*/

function generateID(length=8){

    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let id="";

    for(let i=0;i<length;i++){

        id+=chars.charAt(

            Math.floor(Math.random()*chars.length)

        );

    }

    return id;

}

/*=========================================
  TOAST MESSAGE
=========================================*/

function showToast(message,type="success"){

    const toast=document.createElement("div");

    toast.className=`toast-box ${type}`;

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}

/*=========================================
  COPY TEXT
=========================================*/

function copyText(text){

    navigator.clipboard.writeText(text);

    showToast("Copied Successfully");

}

/*=========================================
  LOCAL STORAGE
=========================================*/

function saveStorage(key,data){

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

function loadStorage(key){

    return JSON.parse(

        localStorage.getItem(key)

    );

}

function removeStorage(key){

    localStorage.removeItem(key);

}

/*=========================================
  DEBOUNCE
=========================================*/

function debounce(func,delay=300){

    let timeout;

    return function(){

        clearTimeout(timeout);

        timeout=setTimeout(

            ()=>func.apply(this,arguments),

            delay

        );

    };

}

/*=========================================
  THROTTLE
=========================================*/

function throttle(func,limit){

    let waiting=false;

    return function(){

        if(waiting) return;

        func.apply(this,arguments);

        waiting=true;

        setTimeout(()=>{

            waiting=false;

        },limit);

    };

}

/*=========================================
  SCROLL TOP
=========================================*/

function scrollTopSmooth(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/*=========================================
  DEVICE CHECK
=========================================*/

function isMobile(){

    return window.innerWidth<=768;

}

/*=========================================
  PRELOAD IMAGE
=========================================*/

function preloadImage(src){

    const img=new Image();

    img.src=src;

}

/*=========================================
  PRICE DISCOUNT
=========================================*/

function calculateDiscount(oldPrice,newPrice){

    return Math.round(

        ((oldPrice-newPrice)/oldPrice)*100

    );

}

/*=========================================
  EXPORT
=========================================*/

window.formatCurrency=formatCurrency;
window.formatDate=formatDate;
window.isValidEmail=isValidEmail;
window.isValidPhone=isValidPhone;
window.generateID=generateID;
window.showToast=showToast;
window.copyText=copyText;
window.saveStorage=saveStorage;
window.loadStorage=loadStorage;
window.removeStorage=removeStorage;
window.debounce=debounce;
window.throttle=throttle;
window.scrollTopSmooth=scrollTopSmooth;
window.isMobile=isMobile;
window.preloadImage=preloadImage;
window.calculateDiscount=calculateDiscount;
