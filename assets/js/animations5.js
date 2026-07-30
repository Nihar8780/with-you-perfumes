/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 6
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initPageTransition();

    initSmoothAnchor();

    initSectionReveal();

    initImageReveal();

    initScrollIndicator();

});

/*==========================================================
  PAGE TRANSITION
==========================================================*/

function initPageTransition(){

    document.querySelectorAll("a").forEach(link=>{

        const href=link.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("javascript") ||
            link.target==="_blank"
        ){
            return;
        }

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            document.body.classList.add(

                "page-leave"

            );

            setTimeout(()=>{

                window.location.href=href;

            },450);

        });

    });

}

/*==========================================================
  SMOOTH SCROLL
==========================================================*/

function initSmoothAnchor(){

    document.querySelectorAll(

        'a[href^="#"]'

    )

    .forEach(anchor=>{

        anchor.addEventListener("click",(e)=>{

            const target=document.querySelector(

                anchor.getAttribute("href")

            );

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}

/*==========================================================
  SECTION REVEAL
==========================================================*/

function initSectionReveal(){

    const sections=document.querySelectorAll(

        "section"

    );

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add(

                        "section-visible"

                    );

                }

            });

        },

        {

            threshold:.18

        }

    );

    sections.forEach(section=>{

        observer.observe(section);

    });

}

/*==========================================================
  IMAGE REVEAL
==========================================================*/

function initImageReveal(){

    document.querySelectorAll(

        ".image-reveal"

    )

    .forEach(image=>{

        const observer=new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        image.classList.add(

                            "image-visible"

                        );

                    }

                });

            }

        );

        observer.observe(image);

    });

}

/*==========================================================
  SCROLL INDICATOR
==========================================================*/

function initScrollIndicator(){

    const indicator=document.querySelector(

        ".scroll-indicator"

    );

    if(!indicator) return;

    window.addEventListener("scroll",()=>{

        const max=

        document.documentElement.scrollHeight-

        window.innerHeight;

        const progress=

        (window.scrollY/max)*100;

        indicator.style.width=

        progress+"%";

    });

}

/*==========================================================
  PARALLAX BACKGROUND
==========================================================*/

window.addEventListener("scroll",()=>{

    document.querySelectorAll(

        ".parallax-bg"

    )

    .forEach(section=>{

        const speed=

        Number(section.dataset.speed)||0.25;

        section.style.backgroundPositionY=

        `${window.scrollY*speed}px`;

    });

});

/*==========================================================
  FLOAT ON SCROLL
==========================================================*/

window.addEventListener("scroll",()=>{

    document.querySelectorAll(

        ".float-scroll"

    )

    .forEach(item=>{

        const y=

        window.scrollY*0.08;

        item.style.transform=

        `translateY(${y}px)`;

    });

});

/*==========================================================
  SCALE ON VIEW
==========================================================*/

document.querySelectorAll(

    ".scale-view"

)

.forEach(item=>{

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    item.classList.add(

                        "scale-active"

                    );

                }

            });

        }

    );

    observer.observe(item);

});

/*==========================================================
  ROTATE ON SCROLL
==========================================================*/

window.addEventListener("scroll",()=>{

    document.querySelectorAll(

        ".rotate-scroll"

    )

    .forEach(item=>{

        item.style.transform=

        `rotate(${window.scrollY/15}deg)`;

    });

});
