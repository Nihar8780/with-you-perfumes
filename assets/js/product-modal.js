/*==========================================================
  WITH YOU - Luxury Perfume Store
  PRODUCT MODAL JS
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initializeProductModal();

});

/*=========================================
  ELEMENTS
=========================================*/

const modal=document.getElementById("productModal");

const modalBody=document.getElementById("productModalBody");

const modalClose=document.querySelector(".modal-close");

/*=========================================
  INITIALIZE
=========================================*/

function initializeProductModal(){

    document.addEventListener("click",(e)=>{

        if(e.target.closest(".quick-view")){

            const id=parseInt(

                e.target.closest(".quick-view").dataset.id

            );

            openProductModal(id);

        }

    });

    if(modalClose){

        modalClose.addEventListener("click",closeProductModal);

    }

    if(modal){

        modal.addEventListener("click",(e)=>{

            if(e.target===modal){

                closeProductModal();

            }

        });

    }

}

/*=========================================
  OPEN MODAL
=========================================*/

function openProductModal(id){

    const product=PRODUCTS.find(item=>item.id===id);

    if(!product) return;

    modalBody.innerHTML=`

<div class="row g-5">

<div class="col-lg-6">

<img
src="${product.image}"
class="img-fluid rounded shadow"
alt="${product.name}"
id="modalMainImage"
>

<div class="d-flex gap-2 mt-3">

${product.gallery.map(image=>`

<img
src="${image}"
class="img-thumbnail modal-thumb"
style="width:80px;cursor:pointer;"
onclick="changeModalImage('${image}')"
>

`).join("")}

</div>

</div>

<div class="col-lg-6">

<span class="badge bg-success mb-3">

${product.badge}

</span>

<h2>${product.name}</h2>

<p class="text-muted">

${product.brand}

</p>

<h3 class="text-success">

₹${product.price.toLocaleString("en-IN")}

</h3>

<p>

<del>

₹${product.oldPrice.toLocaleString("en-IN")}

</del>

</p>

<p>

⭐ ${product.rating}

(${product.reviews} Reviews)

</p>

<p>

${product.description}

</p>

<p>

Stock :
<strong>

${product.stock}

Available

</strong>

</p>

<div class="d-grid gap-3 mt-4">

<button
class="btn btn-success"
onclick="addToCart(${product.id})"
>

Add To Cart

</button>

<button
class="btn btn-dark"
onclick="buyNow(${product.id})"
>

Buy Now

</button>

</div>

</div>

</div>

`;

    modal.classList.add("show");

    document.body.style.overflow="hidden";

}

/*=========================================
  CHANGE IMAGE
=========================================*/

function changeModalImage(src){

    document.getElementById("modalMainImage").src=src;

}

/*=========================================
  CLOSE MODAL
=========================================*/

function closeProductModal(){

    modal.classList.remove("show");

    document.body.style.overflow="";

}

/*=========================================
  ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeProductModal();

    }

});

/*=========================================
  BUY NOW
=========================================*/

function buyNow(id){

    localStorage.setItem(

        "buyNow",

        id

    );

    window.location.href="pages/checkout.html";

}

/*=========================================
  EXPORT
=========================================*/

window.openProductModal=openProductModal;

window.changeModalImage=changeModalImage;

window.closeProductModal=closeProductModal;

window.buyNow=buyNow;
