/*==========================================================
  WITH YOU - Luxury Perfume Store
  SLIDER JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initSlider();

    initBrandSlider();

    initProductSlider();

    initTestimonialSlider();

    initKeyboardNavigation();

});

/*=========================================
  GENERIC SLIDER
=========================================*/

function initSlider(){

    document.querySelectorAll(".slider").forEach(slider=>{

        const track=slider.querySelector(".slider-track");
        const slides=slider.querySelectorAll(".slide");
        const next=slider.querySelector(".slider-next");
        const prev=slider.querySelector(".slider-prev");

        if(!track || slides.length===0) return;

        let current=0;

        function update(){

            track.style.transform=`translateX(-${current*100}%)`;

        }

        if(next){

            next.addEventListener("click",()=>{

                current=(current+1)%slides.length;

                update();

            });

        }

        if(prev){

            prev.addEventListener("click",()=>{

                current=(current-1+slides.length)%slides.length;

                update();

            });

        }

        let auto=setInterval(()=>{

            current=(current+1)%slides.length;

            update();

        },5000);

        slider.addEventListener("mouseenter",()=>{

            clearInterval(auto);

        });

        slider.addEventListener("mouseleave",()=>{

            auto=setInterval(()=>{

                current=(current+1)%slides.length;

                update();

            },5000);

        });

    });

}

/*=========================================
  BRAND LOGO SLIDER
=========================================*/

function initBrandSlider(){

    const track=document.querySelector(".brand-slider-track");

    if(!track) return;

    let position=0;

    function animate(){

        position--;

        if(Math.abs(position)>=track.scrollWidth/2){

            position=0;

        }

        track.style.transform=`translateX(${position}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

/*=========================================
  PRODUCT SLIDER
=========================================*/

function initProductSlider(){

    const wrapper=document.querySelector(".products-slider");

    if(!wrapper) return;

    let isDown=false;

    let startX;

    let scrollLeft;

    wrapper.addEventListener("mousedown",(e)=>{

        isDown=true;

        startX=e.pageX-wrapper.offsetLeft;

        scrollLeft=wrapper.scrollLeft;

    });

    wrapper.addEventListener("mouseleave",()=>{

        isDown=false;

    });

    wrapper.addEventListener("mouseup",()=>{

        isDown=false;

    });

    wrapper.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x=e.pageX-wrapper.offsetLeft;

        const walk=(x-startX)*2;

        wrapper.scrollLeft=scrollLeft-walk;

    });

}

/*=========================================
  TESTIMONIAL SLIDER
=========================================*/

function initTestimonialSlider(){

    const testimonials=document.querySelectorAll(".testimonial-card");

    if(testimonials.length===0) return;

    let current=0;

    testimonials[current].classList.add("active");

    setInterval(()=>{

        testimonials[current].classList.remove("active");

        current=(current+1)%testimonials.length;

        testimonials[current].classList.add("active");

    },6000);

}

/*=========================================
  TOUCH SWIPE
=========================================*/

document.querySelectorAll(".slider").forEach(slider=>{

    let startX=0;

    let endX=0;

    slider.addEventListener("touchstart",(e)=>{

        startX=e.changedTouches[0].clientX;

    });

    slider.addEventListener("touchend",(e)=>{

        endX=e.changedTouches[0].clientX;

        if(startX-endX>50){

            slider.querySelector(".slider-next")?.click();

        }

        if(endX-startX>50){

            slider.querySelector(".slider-prev")?.click();

        }

    });

});

/*=========================================
  KEYBOARD NAVIGATION
=========================================*/

function initKeyboardNavigation(){

    document.addEventListener("keydown",(e)=>{

        if(e.key==="ArrowRight"){

            document.querySelector(".slider-next")?.click();

        }

        if(e.key==="ArrowLeft"){

            document.querySelector(".slider-prev")?.click();

        }

    });

}

/*=========================================
  WINDOW RESIZE
=========================================*/

window.addEventListener("resize",()=>{

    console.log("Slider Updated");

});
