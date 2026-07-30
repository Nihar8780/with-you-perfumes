/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 7
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initMarquee();

    initGlassCards();

    initFloatingCards();

    initLazyAnimation();

    initPerformanceLoop();

});

/*==========================================================
  INFINITE MARQUEE
==========================================================*/

function initMarquee(){

    document.querySelectorAll(".marquee")

    .forEach(marquee=>{

        let position=0;

        function animate(){

            position-=0.5;

            if(position<=-50){

                position=0;

            }

            marquee.style.transform=

            `translateX(${position}px)`;

            requestAnimationFrame(animate);

        }

        animate();

    });

}

/*==========================================================
  GLASS CARD EFFECT
==========================================================*/

function initGlassCards(){

    document.querySelectorAll(".glass-card")

    .forEach(card=>{

        card.addEventListener("mousemove",(event)=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;

            const y=event.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,255,255,.18),
            rgba(255,255,255,.05))`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="";

        });

    });

}

/*==========================================================
  FLOATING CARDS
==========================================================*/

function initFloatingCards(){

    document.querySelectorAll(".floating-card")

    .forEach((card,index)=>{

        let offset=index*15;

        function floatCard(){

            offset+=0.03;

            card.style.transform=

            `translateY(${Math.sin(offset)*10}px)`;

            requestAnimationFrame(floatCard);

        }

        floatCard();

    });

}

/*==========================================================
  LAZY ANIMATION
==========================================================*/

function initLazyAnimation(){

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("animated");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold:.15

        }

    );

    document.querySelectorAll(".lazy-animation")

    .forEach(item=>{

        observer.observe(item);

    });

}

/*==========================================================
  RAF PERFORMANCE ENGINE
==========================================================*/

let lastTime=0;

function initPerformanceLoop(){

    requestAnimationFrame(animationLoop);

}

function animationLoop(time){

    const delta=time-lastTime;

    if(delta>16){

        updateLuxuryEffects();

        lastTime=time;

    }

    requestAnimationFrame(animationLoop);

}

/*==========================================================
  LUXURY EFFECTS
==========================================================*/

function updateLuxuryEffects(){

    document.querySelectorAll(".rotate-float")

    .forEach((item,index)=>{

        const rotate=

        Math.sin(Date.now()/1000+index)*3;

        item.style.transform=

        `rotate(${rotate}deg)`;

    });

}

/*==========================================================
  PRODUCT IMAGE SHINE
==========================================================*/

document.querySelectorAll(".product-card")

.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.classList.add("shine-animation");

    });

    card.addEventListener("mouseleave",()=>{

        card.classList.remove("shine-animation");

    });

});

/*==========================================================
  AUTO NUMBER COUNT
==========================================================*/

document.querySelectorAll(".auto-counter")

.forEach(counter=>{

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const target=

                parseInt(counter.dataset.target);

                let value=0;

                const timer=setInterval(()=>{

                    value+=Math.ceil(target/80);

                    if(value>=target){

                        value=target;

                        clearInterval(timer);

                    }

                    counter.innerHTML=

                    value.toLocaleString();

                },20);

                observer.unobserve(counter);

            }

        });

    });

    observer.observe(counter);

});

/*==========================================================
  BUTTON GLOW
==========================================================*/

document.querySelectorAll(".luxury-btn")

.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow=

        "0 0 35px rgba(212,175,55,.5)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow="";

    });

});
