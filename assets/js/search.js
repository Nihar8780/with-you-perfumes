/*==========================================================
  WITH YOU - Luxury Perfume Store
  SEARCH JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initSearch();

    initSearchShortcut();

    loadRecentSearches();

});

/*=========================================
  SEARCH DATA
=========================================*/

const perfumeProducts = [

    "Gucci Flora",
    "Gucci Guilty",
    "Prada Luna Rossa",
    "Prada Paradoxe",
    "Armani Stronger With You",
    "Armani Acqua Di Gio",
    "Zara Red Temptation",
    "Zara Vibrant Leather",
    "Fogg Impressio",
    "Fogg Marco",
    "Oud Wood",
    "Tom Ford Oud Wood",
    "Dior Sauvage",
    "Versace Eros",
    "Bleu De Chanel",
    "YSL Libre",
    "Burberry Hero",
    "Calvin Klein One"

];

/*=========================================
  INITIALIZE SEARCH
=========================================*/

function initSearch(){

    const input=document.querySelector(".search-input");
    const results=document.querySelector(".search-results");

    if(!input || !results) return;

    input.addEventListener("input",()=>{

        const value=input.value.trim().toLowerCase();

        results.innerHTML="";

        if(value===""){

            showTrendingSearches();

            return;

        }

        const filtered=perfumeProducts.filter(item=>

            item.toLowerCase().includes(value)

        );

        if(filtered.length===0){

            results.innerHTML=`
                <div class="no-results">
                    No perfume found.
                </div>
            `;

            return;

        }

        filtered.forEach(item=>{

            const div=document.createElement("div");

            div.className="search-item";

            div.innerHTML=`
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>${item}</span>
            `;

            div.addEventListener("click",()=>{

                input.value=item;

                saveSearch(item);

                results.innerHTML="";

            });

            results.appendChild(div);

        });

    });

}

/*=========================================
  TRENDING SEARCHES
=========================================*/

function showTrendingSearches(){

    const results=document.querySelector(".search-results");

    if(!results) return;

    const trending=[

        "Gucci",
        "Prada",
        "Armani",
        "Dior",
        "Zara",
        "Tom Ford"

    ];

    results.innerHTML="<h4>Trending Searches</h4>";

    trending.forEach(item=>{

        results.innerHTML+=`
            <div class="search-item">
                <i class="fa-solid fa-fire"></i>
                <span>${item}</span>
            </div>
        `;

    });

}

/*=========================================
  RECENT SEARCHES
=========================================*/

function saveSearch(value){

    let history=JSON.parse(localStorage.getItem("withyou-search"))||[];

    history.unshift(value);

    history=[...new Set(history)];

    history=history.slice(0,6);

    localStorage.setItem(

        "withyou-search",

        JSON.stringify(history)

    );

}

function loadRecentSearches(){

    const container=document.querySelector(".recent-searches");

    if(!container) return;

    const history=JSON.parse(

        localStorage.getItem("withyou-search")

    )||[];

    container.innerHTML="";

    history.forEach(item=>{

        container.innerHTML+=`

            <div class="recent-item">

                <i class="fa-solid fa-clock-rotate-left"></i>

                <span>${item}</span>

            </div>

        `;

    });

}

/*=========================================
  SEARCH SHORTCUT
=========================================*/

function initSearchShortcut(){

    document.addEventListener("keydown",(e)=>{

        if(e.ctrlKey && e.key.toLowerCase()==="k"){

            e.preventDefault();

            document.querySelector(".search-popup")
            ?.classList.add("active");

            document.querySelector(".search-input")
            ?.focus();

        }

    });

}

/*=========================================
  SEARCH FILTER
=========================================*/

function filterByCategory(category){

    console.log("Category:",category);

}

function filterByBrand(brand){

    console.log("Brand:",brand);

}

/*=========================================
  CLOSE SEARCH
=========================================*/

document.querySelector(".search-close")?.addEventListener(

    "click",

    ()=>{

        document.querySelector(".search-popup")
        ?.classList.remove("active");

    }

);

/*=========================================
  ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        document.querySelector(".search-popup")
        ?.classList.remove("active");

    }

});
