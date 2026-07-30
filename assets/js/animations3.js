/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 4
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initCustomCursor();

    initMouseTrail();

    initFloatingParticles();

    initSparkleEffect();

});

/*==========================================================
  CUSTOM CURSOR
==========================================================*/

function initCustomCursor(){

    const cursor=document.querySelector(".custom-cursor");

    if(!cursor) return;

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left=e.clientX+"px";

        cursor.style.top=e.clientY+"px";

    });

    document.querySelectorAll("a,button,.btn,.product-card")

    .forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            cursor.classList.add("cursor-hover");

        });

        item.addEventListener("mouseleave",()=>{

            cursor.classList.remove("cursor-hover");

        });

    });

}

/*==========================================================
  MOUSE TRAIL
==========================================================*/

function initMouseTrail(){

    document.addEventListener("mousemove",(e)=>{

        const dot=document.createElement("span");

        dot.className="mouse-trail";

        dot.style.left=e.pageX+"px";

        dot.style.top=e.pageY+"px";

        document.body.appendChild(dot);

        setTimeout(()=>{

            dot.remove();

        },600);

    });

}

/*==========================================================
  FLOATING PARTICLES
==========================================================*/

function initFloatingParticles(){

    const container=document.querySelector(".particles");

    if(!container) return;

    for(let i=0;i<25;i++){

        const particle=document.createElement("span");

        particle.className="particle";

        particle.style.left=Math.random()*100+"%";

        particle.style.animationDelay=Math.random()*8+"s";

        particle.style.animationDuration=

        (5+Math.random()*6)+"s";

        container.appendChild(particle);

    }

}

/*==========================================================
  SPARKLE EFFECT
==========================================================*/

function initSparkleEffect(){

    document.querySelectorAll(".luxury-card")

    .forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            for(let i=0;i<8;i++){

                createSparkle(card);

            }

        });

    });

}

function createSparkle(card){

    const sparkle=document.createElement("span");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"%";

    sparkle.style.top=Math.random()*100+"%";

    card.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1200);

}

/*==========================================================
  IMAGE SHINE
==========================================================*/

document.querySelectorAll(".product-image")

.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.classList.add("shine");

    });

    image.addEventListener("mouseleave",()=>{

        image.classList.remove("shine");

    });

});

/*==========================================================
  SECTION FADE
==========================================================*/

window.addEventListener("scroll",()=>{

    document.querySelectorAll("section")

    .forEach(section=>{

        const rect=section.getBoundingClientRect();

        if(rect.top<window.innerHeight-120){

            section.classList.add("visible");

        }

    });

});

/*==========================================================
  ICON ROTATION
==========================================================*/

document.querySelectorAll(".rotate-icon")

.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="rotate(360deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="rotate(0deg)";

    });

});

/*==========================================================
  GOLDEN GLOW BUTTON
==========================================================*/

document.querySelectorAll(".gold-btn")

.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow=

        "0 0 30px rgba(212,175,55,.6)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow="";

    });

});
