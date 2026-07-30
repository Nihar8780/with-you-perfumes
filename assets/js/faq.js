/*==========================================================
  WITH YOU - Luxury Perfume Store
  FAQ JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeFAQ();

    initializeFAQSearch();

});

/*=========================================
  FAQ ACCORDION
=========================================*/

function initializeFAQ(){

    const items = document.querySelectorAll(".faq-item");

    items.forEach(item=>{

        const question = item.querySelector(".faq-question");

        question.addEventListener("click",()=>{

            items.forEach(other=>{

                if(other!==item){

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}

/*=========================================
  SEARCH FAQ
=========================================*/

function initializeFAQSearch(){

    const input=document.getElementById("faqSearch");

    if(!input) return;

    input.addEventListener("keyup",()=>{

        const value=input.value.toLowerCase();

        document.querySelectorAll(".faq-item").forEach(item=>{

            const text=item.innerText.toLowerCase();

            if(text.includes(value)){

                item.style.display="block";

            }else{

                item.style.display="none";

            }

        });

    });

}

/*=========================================
  OPEN ALL
=========================================*/

function openAllFAQ(){

    document.querySelectorAll(".faq-item").forEach(item=>{

        item.classList.add("active");

    });

}

/*=========================================
  CLOSE ALL
=========================================*/

function closeAllFAQ(){

    document.querySelectorAll(".faq-item").forEach(item=>{

        item.classList.remove("active");

    });

}

/*=========================================
  CATEGORY FILTER
=========================================*/

function filterFAQ(category){

    document.querySelectorAll(".faq-item").forEach(item=>{

        const itemCategory=item.dataset.category;

        if(category==="all"){

            item.style.display="block";

        }else{

            item.style.display=

            itemCategory===category

            ?"block"

            :"none";

        }

    });

}

/*=========================================
  SCROLL TO FAQ
=========================================*/

function scrollToFAQ(id){

    const faq=document.getElementById(id);

    if(faq){

        faq.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

        faq.classList.add("active");

    }

}

/*=========================================
  KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeAllFAQ();

    }

});

/*=========================================
  EXPORT
=========================================*/

window.openAllFAQ=openAllFAQ;

window.closeAllFAQ=closeAllFAQ;

window.filterFAQ=filterFAQ;

window.scrollToFAQ=scrollToFAQ;
