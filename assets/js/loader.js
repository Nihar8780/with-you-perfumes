/*==========================================================
  WITH YOU - Luxury Perfume Store
  LOADER JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeLoader();

    initializePageTransition();

});

/*=========================================
  PRELOADER
=========================================*/

function initializeLoader(){

    const loader = document.getElementById("preloader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.classList.add("loaded");

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    });

}

/*=========================================
  PAGE TRANSITION
=========================================*/

function initializePageTransition(){

    document.querySelectorAll("a").forEach(link=>{

        const href = link.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("javascript") ||
            link.target === "_blank"
        ){
            return;
        }

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const loader=document.getElementById("preloader");

            if(loader){

                loader.style.display="flex";

                loader.classList.remove("loaded");

            }

            setTimeout(()=>{

                window.location.href=href;

            },400);

        });

    });

}

/*=========================================
  BUTTON LOADER
=========================================*/

function showButtonLoader(button){

    if(!button) return;

    button.dataset.original = button.innerHTML;

    button.disabled = true;

    button.innerHTML = `

        <span class="spinner-border spinner-border-sm me-2"></span>

        Processing...

    `;

}

function hideButtonLoader(button){

    if(!button) return;

    button.disabled = false;

    button.innerHTML = button.dataset.original;

}

/*=========================================
  GLOBAL LOADER
=========================================*/

function showLoader(){

    const loader=document.getElementById("preloader");

    if(loader){

        loader.style.display="flex";

        loader.classList.remove("loaded");

    }

}

function hideLoader(){

    const loader=document.getElementById("preloader");

    if(loader){

        loader.classList.add("loaded");

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

}

/*=========================================
  NETWORK STATUS
=========================================*/

window.addEventListener("offline",()=>{

    alert("No Internet Connection");

});

window.addEventListener("online",()=>{

    console.log("Internet Connected");

});

/*=========================================
  EXPORT
=========================================*/

window.showLoader = showLoader;
window.hideLoader = hideLoader;
window.showButtonLoader = showButtonLoader;
window.hideButtonLoader = hideButtonLoader;
