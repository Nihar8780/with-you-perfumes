/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 1
==========================================================*/

"use strict";

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initScrollReveal();

    initNavbarScroll();

    initBackToTop();

    initScrollProgress();

    initFadeUp();

    initZoomIn();

    initSlideLeft();

    initSlideRight();

});

/*==========================================================
  SCROLL REVEAL
==========================================================*/

function initScrollReveal(){

    const elements=document.querySelectorAll(

        ".reveal"

    );

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add(

                        "active"

                    );

                }

            });

        },

        {

            threshold:.15

        }

    );

    elements.forEach(element=>{

        observer.observe(element);

    });

}

/*==========================================================
  FADE UP
==========================================================*/

function initFadeUp(){

    document.querySelectorAll(".fade-up")

    .forEach(element=>{

        observeAnimation(

            element,

            "animate-fade-up"

        );

    });

}

/*==========================================================
  ZOOM
==========================================================*/

function initZoomIn(){

    document.querySelectorAll(".zoom-in")

    .forEach(element=>{

        observeAnimation(

            element,

            "animate-zoom"

        );

    });

}

/*==========================================================
  SLIDE LEFT
==========================================================*/

function initSlideLeft(){

    document.querySelectorAll(".slide-left")

    .forEach(element=>{

        observeAnimation(

            element,

            "animate-left"

        );

    });

}

/*==========================================================
  SLIDE RIGHT
==========================================================*/

function initSlideRight(){

    document.querySelectorAll(".slide-right")

    .forEach(element=>{

        observeAnimation(

            element,

            "animate-right"

        );

    });

}

/*==========================================================
  OBSERVER
==========================================================*/

function observeAnimation(element,className){

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add(className);

                }

            });

        },

        {

            threshold:.20

        }

    );

    observer.observe(element);

}

/*==========================================================
  NAVBAR
==========================================================*/

function initNavbarScroll(){

    const navbar=document.querySelector("header");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            navbar.classList.add(

                "header-scrolled"

            );

        }

        else{

            navbar.classList.remove(

                "header-scrolled"

            );

        }

    });

}

/*==========================================================
  BACK TO TOP
==========================================================*/

function initBackToTop(){

    const button=document.querySelector(

        ".back-top"

    );

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }

        else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==========================================================
  SCROLL PROGRESS BAR
==========================================================*/

function initScrollProgress(){

    const progress=document.querySelector(

        ".scroll-progress"

    );

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=

        document.documentElement.scrollHeight-

        window.innerHeight;

        const percent=

        window.scrollY/total*100;

        progress.style.width=

        percent+"%";

    });

}
