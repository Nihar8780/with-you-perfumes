/*==========================================================
  WITH YOU - Luxury Perfume Store
  APP JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});

/*=========================================
  INITIALIZE WEBSITE
=========================================*/

function initializeWebsite(){

    hideLoader();

    initNavbar();

    initScrollProgress();

    initBackToTop();

    initSmoothScroll();

    initRevealAnimation();

    initCounterAnimation();

    initCurrentYear();

    initLazyImages();

    console.log("%cWITH YOU Website Loaded Successfully",
    "color:#D4AF37;font-size:16px;font-weight:bold");

}

/*=========================================
  LOADER
=========================================*/

function hideLoader(){

    const loader = document.querySelector(".loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        loader.style.pointerEvents="none";

    });

}

/*=========================================
  STICKY NAVBAR
=========================================*/

function initNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}

/*=========================================
  BACK TO TOP
=========================================*/

function initBackToTop(){

    const btn=document.querySelector(".back-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        btn.style.display=window.scrollY>400?"flex":"none";

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=========================================
  SMOOTH SCROLL
=========================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

}

/*=========================================
  SCROLL REVEAL
=========================================*/

function initRevealAnimation(){

    const reveals=document.querySelectorAll(".reveal");

    if(reveals.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>observer.observe(item));

}

/*=========================================
  COUNTER
=========================================*/

function initCounterAnimation(){

    const counters=document.querySelectorAll("[data-counter]");

    if(counters.length===0) return;

    counters.forEach(counter=>{

        const target=+counter.dataset.counter;

        let current=0;

        const speed=target/120;

        const update=()=>{

            current+=speed;

            if(current<target){

                counter.innerText=Math.floor(current);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        };

        update();

    });

}

/*=========================================
  CURRENT YEAR
=========================================*/

function initCurrentYear(){

    const year=document.getElementById("currentYear");

    if(year){

        year.textContent=new Date().getFullYear();

    }

}

/*=========================================
  LAZY LOAD IMAGES
=========================================*/

function initLazyImages(){

    const images=document.querySelectorAll("img[data-src]");

    if(images.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    images.forEach(img=>observer.observe(img));

}

/*=========================================
  GLOBAL HELPERS
=========================================*/

function qs(selector){

    return document.querySelector(selector);

}

function qsa(selector){

    return document.querySelectorAll(selector);

}

/*=========================================
  WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    console.log("Window Width :",window.innerWidth);

});
