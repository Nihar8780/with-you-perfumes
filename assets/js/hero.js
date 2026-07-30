/*==========================================================
  WITH YOU - Luxury Perfume Store
  HERO JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroSlider();

    initHeroButtons();

    initScrollIndicator();

    initHeroParallax();

    initFloatingElements();

    initHeroTyping();

});

/*=========================================
  HERO SLIDER
=========================================*/

function initHeroSlider(){

    const slides=document.querySelectorAll(".hero-slide");

    if(slides.length===0) return;

    let current=0;

    slides[current].classList.add("active");

    setInterval(()=>{

        slides[current].classList.remove("active");

        current=(current+1)%slides.length;

        slides[current].classList.add("active");

    },5000);

}

/*=========================================
  HERO BUTTONS
=========================================*/

function initHeroButtons(){

    document.querySelectorAll(".hero-buttons .btn").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.classList.add("hover");

        });

        btn.addEventListener("mouseleave",()=>{

            btn.classList.remove("hover");

        });

    });

}

/*=========================================
  SCROLL INDICATOR
=========================================*/

function initScrollIndicator(){

    const indicator=document.querySelector(".scroll-indicator");

    if(!indicator) return;

    indicator.addEventListener("click",()=>{

        const next=document.querySelector("section");

        if(next){

            next.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

/*=========================================
  HERO PARALLAX
=========================================*/

function initHeroParallax(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.pageX)/40;

        const y=(window.innerHeight/2-e.pageY)/40;

        hero.style.backgroundPosition=`${50+x}% ${50+y}%`;

    });

}

/*=========================================
  FLOATING ELEMENTS
=========================================*/

function initFloatingElements(){

    const elements=document.querySelectorAll(".floating-element");

    if(elements.length===0) return;

    window.addEventListener("mousemove",(e)=>{

        const x=e.clientX/window.innerWidth;

        const y=e.clientY/window.innerHeight;

        elements.forEach((item,index)=>{

            const speed=(index+1)*10;

            item.style.transform=`translate(${x*speed}px,${y*speed}px)`;

        });

    });

}

/*=========================================
  HERO TYPING EFFECT
=========================================*/

function initHeroTyping(){

    const element=document.querySelector(".typing-text");

    if(!element) return;

    const words=[

        "Luxury Perfumes",

        "Premium Fragrances",

        "Exclusive Collection",

        "Designer Brands"

    ];

    let wordIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const current=words[wordIndex];

        if(!deleting){

            element.textContent=current.substring(0,charIndex++);

            if(charIndex>current.length){

                deleting=true;

                setTimeout(type,1500);

                return;

            }

        }else{

            element.textContent=current.substring(0,charIndex--);

            if(charIndex===0){

                deleting=false;

                wordIndex=(wordIndex+1)%words.length;

            }

        }

        setTimeout(type,deleting?50:100);

    }

    type();

}

/*=========================================
  HERO FADE ON SCROLL
=========================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const value=window.scrollY;

    hero.style.opacity=1-(value/800);

});

/*=========================================
  HERO IMAGE ZOOM
=========================================*/

window.addEventListener("scroll",()=>{

    const image=document.querySelector(".hero-image img");

    if(!image) return;

    const scale=1+(window.scrollY/6000);

    image.style.transform=`scale(${scale})`;

});

/*=========================================
  HERO COUNTER
=========================================*/

document.querySelectorAll(".hero-counter").forEach(counter=>{

    const target=parseInt(counter.dataset.target)||0;

    let value=0;

    const interval=setInterval(()=>{

        value+=Math.ceil(target/80);

        if(value>=target){

            value=target;

            clearInterval(interval);

        }

        counter.textContent=value;

    },30);

});

/*=========================================
  HERO VIDEO PLAY
=========================================*/

const playBtn=document.querySelector(".hero-play");

const video=document.querySelector(".hero-video");

if(playBtn && video){

    playBtn.addEventListener("click",()=>{

        if(video.paused){

            video.play();

            playBtn.classList.add("playing");

        }else{

            video.pause();

            playBtn.classList.remove("playing");

        }

    });

}

/*=========================================
  RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    console.log("Hero Updated");

});
