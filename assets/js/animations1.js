/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 2
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initHeroAnimation();

    initFloatingElements();

    initCounterAnimation();

    initProgressBars();

    initStaggerAnimation();

});

/*==========================================================
  HERO ANIMATION
==========================================================*/

function initHeroAnimation(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.classList.add("hero-loaded");

    const items=hero.querySelectorAll(

        ".hero-title,.hero-subtitle,.hero-btn,.hero-image"

    );

    items.forEach((item,index)=>{

        item.style.opacity="0";

        item.style.transform="translateY(40px)";

        setTimeout(()=>{

            item.style.transition=

            "all .8s ease";

            item.style.opacity="1";

            item.style.transform=

            "translateY(0)";

        },250*index);

    });

}

/*==========================================================
  FLOATING ELEMENTS
==========================================================*/

function initFloatingElements(){

    document.querySelectorAll(".floating")

    .forEach((element,index)=>{

        let position=0;

        let direction=1;

        setInterval(()=>{

            position+=0.4*direction;

            if(position>=12){

                direction=-1;

            }

            if(position<=-12){

                direction=1;

            }

            element.style.transform=

            `translateY(${position}px)`;

        },30+index*5);

    });

}

/*==========================================================
  STAGGER ANIMATION
==========================================================*/

function initStaggerAnimation(){

    const groups=document.querySelectorAll(

        ".stagger"

    );

    groups.forEach(group=>{

        const children=group.children;

        Array.from(children)

        .forEach((child,index)=>{

            child.style.opacity="0";

            child.style.transform=

            "translateY(35px)";

            const observer=

            new IntersectionObserver(entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        setTimeout(()=>{

                            child.style.transition=

                            ".7s ease";

                            child.style.opacity="1";

                            child.style.transform=

                            "translateY(0)";

                        },120*index);

                    }

                });

            });

            observer.observe(child);

        });

    });

}

/*==========================================================
  COUNTER
==========================================================*/

function initCounterAnimation(){

    const counters=document.querySelectorAll(

        ".counter"

    );

    counters.forEach(counter=>{

        const observer=

        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    animateCounter(counter);

                    observer.unobserve(counter);

                }

            });

        });

        observer.observe(counter);

    });

}

function animateCounter(counter){

    const target=

    Number(counter.dataset.target);

    let value=0;

    const increment=

    Math.ceil(target/100);

    const timer=setInterval(()=>{

        value+=increment;

        if(value>=target){

            value=target;

            clearInterval(timer);

        }

        counter.innerHTML=

        value.toLocaleString("en-IN");

    },20);

}

/*==========================================================
  PROGRESS BAR
==========================================================*/

function initProgressBars(){

    document.querySelectorAll(

        ".progress-fill"

    )

    .forEach(bar=>{

        const observer=

        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const width=

                    bar.dataset.width;

                    bar.style.width=

                    width+"%";

                }

            });

        });

        observer.observe(bar);

    });

}

/*==========================================================
  HERO PARALLAX
==========================================================*/

window.addEventListener("mousemove",(event)=>{

    const image=document.querySelector(

        ".hero-image"

    );

    if(!image) return;

    const x=

    (window.innerWidth/2-event.clientX)/40;

    const y=

    (window.innerHeight/2-event.clientY)/40;

    image.style.transform=

    `translate(${x}px,${y}px)`;

});
