/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 8 (FINAL)
==========================================================*/

"use strict";

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initDeviceOptimization();

    initReducedMotion();

    initLazyImages();

    initScrollMemory();

    initAnimationCleanup();

    initPageLoaded();

});

/*==========================================================
  DEVICE OPTIMIZATION
==========================================================*/

function initDeviceOptimization(){

    if(window.innerWidth<=768){

        document.body.classList.add("mobile-device");

    }

}

/*==========================================================
  REDUCED MOTION
==========================================================*/

function initReducedMotion(){

    if(

        window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        ).matches

    ){

        document.body.classList.add(

            "reduce-motion"

        );

    }

}

/*==========================================================
  LAZY IMAGE LOADING
==========================================================*/

function initLazyImages(){

    const images=document.querySelectorAll(

        "img[data-src]"

    );

    if(images.length===0) return;

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const image=entry.target;

                    image.src=image.dataset.src;

                    image.removeAttribute("data-src");

                    image.classList.add("loaded");

                    observer.unobserve(image);

                }

            });

        },

        {

            threshold:.1

        }

    );

    images.forEach(image=>{

        observer.observe(image);

    });

}

/*==========================================================
  SCROLL MEMORY
==========================================================*/

function initScrollMemory(){

    const key="withyou-scroll";

    const saved=localStorage.getItem(key);

    if(saved){

        window.scrollTo({

            top:Number(saved)

        });

    }

    window.addEventListener("beforeunload",()=>{

        localStorage.setItem(

            key,

            window.scrollY

        );

    });

}

/*==========================================================
  CLEANUP
==========================================================*/

function initAnimationCleanup(){

    window.addEventListener("pagehide",()=>{

        document.querySelectorAll(

            ".mouse-trail,.sparkle,.ripple"

        )

        .forEach(item=>{

            item.remove();

        });

    });

}

/*==========================================================
  PAGE READY
==========================================================*/

function initPageLoaded(){

    window.addEventListener("load",()=>{

        document.body.classList.add(

            "page-loaded"

        );

    });

}

/*==========================================================
  FPS FRIENDLY PARALLAX
==========================================================*/

let ticking=false;

window.addEventListener("scroll",()=>{

    if(!ticking){

        requestAnimationFrame(()=>{

            updateParallax();

            ticking=false;

        });

        ticking=true;

    }

});

function updateParallax(){

    const offset=window.scrollY;

    document.querySelectorAll(".parallax")

    .forEach(item=>{

        const speed=

        Number(item.dataset.speed)||0.15;

        item.style.transform=

        `translateY(${offset*speed}px)`;

    });

}

/*==========================================================
  HOVER SOUND (OPTIONAL)
==========================================================*/

function playHoverSound(){

    const audio=document.getElementById(

        "hoverSound"

    );

    if(audio){

        audio.currentTime=0;

        audio.play().catch(()=>{});

    }

}

document.querySelectorAll(

    ".premium-btn"

)

.forEach(button=>{

    button.addEventListener(

        "mouseenter",

        playHoverSound

    );

});

/*==========================================================
  PERFORMANCE REPORT
==========================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        console.log(

            "%cWITH YOU Luxury Animation Engine Loaded",

            "color:#d4af37;font-size:14px;font-weight:bold"

        );

    },500);

});

/*==========================================================
  GLOBAL EXPORTS
==========================================================*/

window.initScrollReveal=initScrollReveal;
window.initHeroAnimation=initHeroAnimation;
window.initFloatingElements=initFloatingElements;
window.initCounterAnimation=initCounterAnimation;
window.initProductHover=initProductHover;
window.initRippleEffect=initRippleEffect;
window.initLuxuryGlow=initLuxuryGlow;
window.initCustomCursor=initCustomCursor;
window.initMouseTrail=initMouseTrail;
window.initFloatingParticles=initFloatingParticles;
window.initSplitText=initSplitText;
window.initTypewriter=initTypewriter;
window.initPageTransition=initPageTransition;
