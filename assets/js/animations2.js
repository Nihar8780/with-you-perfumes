/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 3
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initProductHover();

    initRippleEffect();

    initImageZoom();

    initLuxuryGlow();

    initMagneticButtons();

});

/*==========================================================
  PREMIUM PRODUCT CARD
==========================================================*/

function initProductHover(){

    document.querySelectorAll(".product-card")

    .forEach(card=>{

        card.addEventListener("mousemove",(event)=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;

            const y=event.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*14;

            const rotateX=((y/rect.height)-0.5)*-14;

            card.style.transform=

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)
             scale(1.03)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform=

            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

        });

    });

}

/*==========================================================
  IMAGE ZOOM
==========================================================*/

function initImageZoom(){

    document.querySelectorAll(".product-image img")

    .forEach(image=>{

        image.addEventListener("mouseenter",()=>{

            image.style.transition=".5s ease";

            image.style.transform="scale(1.12)";

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="scale(1)";

        });

    });

}

/*==========================================================
  RIPPLE BUTTON
==========================================================*/

function initRippleEffect(){

    document.querySelectorAll(

        ".btn"

    )

    .forEach(button=>{

        button.addEventListener("click",(event)=>{

            const ripple=document.createElement("span");

            const diameter=Math.max(

                button.clientWidth,

                button.clientHeight

            );

            ripple.style.width=diameter+"px";

            ripple.style.height=diameter+"px";

            ripple.className="ripple";

            ripple.style.left=

            event.offsetX-diameter/2+"px";

            ripple.style.top=

            event.offsetY-diameter/2+"px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

}

/*==========================================================
  LUXURY GLOW
==========================================================*/

function initLuxuryGlow(){

    document.querySelectorAll(

        ".glow-card"

    )

    .forEach(card=>{

        card.addEventListener("mousemove",(event)=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;

            const y=event.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,

            rgba(212,175,55,.20),

            transparent 60%)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="";

        });

    });

}

/*==========================================================
  MAGNETIC BUTTONS
==========================================================*/

function initMagneticButtons(){

    document.querySelectorAll(

        ".magnetic"

    )

    .forEach(button=>{

        button.addEventListener("mousemove",(event)=>{

            const rect=button.getBoundingClientRect();

            const x=

            event.clientX-

            rect.left-

            rect.width/2;

            const y=

            event.clientY-

            rect.top-

            rect.height/2;

            button.style.transform=

            `translate(${x*.25}px,

            ${y*.25}px)`;

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform=

            "translate(0,0)";

        });

    });

}

/*==========================================================
  HOVER SHADOW
==========================================================*/

document.querySelectorAll(

    ".product-card"

)

.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow=

        "0 30px 60px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

/*==========================================================
  BUTTON FLOAT
==========================================================*/

document.querySelectorAll(

    ".btn"

)

.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform=

        "translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform=

        "translateY(0px)";

    });

});
