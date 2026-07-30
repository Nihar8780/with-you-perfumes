/*==========================================================
  WITH YOU - Luxury Perfume Store
  NAVBAR JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();

    initStickyNavbar();

    initActiveNavigation();

    initDropdownMenu();

    initSearchPopup();

    initCartSidebar();

    initWishlistSidebar();

});

/*=========================================
  MOBILE MENU
=========================================*/

function initMobileMenu(){

    const toggle=document.querySelector(".mobile-toggle");
    const menu=document.querySelector(".nav-menu");
    const overlay=document.querySelector(".menu-overlay");
    const close=document.querySelector(".menu-close");

    if(!toggle || !menu) return;

    toggle.addEventListener("click",()=>{

        menu.classList.add("active");

        if(overlay) overlay.classList.add("active");

        document.body.style.overflow="hidden";

    });

    if(close){

        close.addEventListener("click",closeMenu);

    }

    if(overlay){

        overlay.addEventListener("click",closeMenu);

    }

    function closeMenu(){

        menu.classList.remove("active");

        if(overlay) overlay.classList.remove("active");

        document.body.style.overflow="";

    }

}

/*=========================================
  STICKY NAVBAR
=========================================*/

function initStickyNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.classList.add("sticky");

        }else{

            navbar.classList.remove("sticky");

        }

    });

}

/*=========================================
  ACTIVE NAVIGATION
=========================================*/

function initActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");
    const navLinks=document.querySelectorAll(".nav-link");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;
            const height=section.offsetHeight;

            if(window.scrollY>=top && window.scrollY<top+height){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/*=========================================
  DROPDOWN MENU
=========================================*/

function initDropdownMenu(){

    document.querySelectorAll(".dropdown").forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.classList.add("open");

        });

        item.addEventListener("mouseleave",()=>{

            item.classList.remove("open");

        });

    });

}

/*=========================================
  SEARCH POPUP
=========================================*/

function initSearchPopup(){

    const open=document.querySelector(".search-btn");
    const popup=document.querySelector(".search-popup");
    const close=document.querySelector(".search-close");

    if(!open || !popup) return;

    open.addEventListener("click",()=>{

        popup.classList.add("active");

    });

    if(close){

        close.addEventListener("click",()=>{

            popup.classList.remove("active");

        });

    }

}

/*=========================================
  CART SIDEBAR
=========================================*/

function initCartSidebar(){

    const open=document.querySelector(".cart-btn");
    const sidebar=document.querySelector(".cart-sidebar");
    const close=document.querySelector(".cart-close");

    if(!open || !sidebar) return;

    open.addEventListener("click",()=>{

        sidebar.classList.add("active");

    });

    if(close){

        close.addEventListener("click",()=>{

            sidebar.classList.remove("active");

        });

    }

}

/*=========================================
  WISHLIST SIDEBAR
=========================================*/

function initWishlistSidebar(){

    const open=document.querySelector(".wishlist-btn");
    const sidebar=document.querySelector(".wishlist-sidebar");
    const close=document.querySelector(".wishlist-close");

    if(!open || !sidebar) return;

    open.addEventListener("click",()=>{

        sidebar.classList.add("active");

    });

    if(close){

        close.addEventListener("click",()=>{

            sidebar.classList.remove("active");

        });

    }

}

/*=========================================
  ESC KEY CLOSE
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        document.querySelectorAll(".active").forEach(item=>{

            if(
                item.classList.contains("search-popup") ||
                item.classList.contains("cart-sidebar") ||
                item.classList.contains("wishlist-sidebar") ||
                item.classList.contains("nav-menu")
            ){

                item.classList.remove("active");

            }

        });

    }

});
