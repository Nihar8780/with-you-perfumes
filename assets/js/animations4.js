/*==========================================================
  WITH YOU
  Luxury Animation Engine
  animations.js
  PART 5
==========================================================*/

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initSplitText();

    initTypewriter();

    initHeadingReveal();

    initTextParallax();

    initFadeWords();

});

/*==========================================================
  SPLIT LETTER ANIMATION
==========================================================*/

function initSplitText(){

    document.querySelectorAll(".split-text")

    .forEach(text=>{

        const content=text.textContent;

        text.innerHTML="";

        [...content].forEach((letter,index)=>{

            const span=document.createElement("span");

            span.className="split-letter";

            span.innerHTML=

            letter===" " ? "&nbsp;" : letter;

            span.style.transitionDelay=

            `${index*40}ms`;

            text.appendChild(span);

        });

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    text.classList.add("active");

                }

            });

        });

        observer.observe(text);

    });

}

/*==========================================================
  TYPEWRITER
==========================================================*/

function initTypewriter(){

    document.querySelectorAll(".typewriter")

    .forEach(element=>{

        const text=element.dataset.text;

        if(!text) return;

        let index=0;

        element.innerHTML="";

        const timer=setInterval(()=>{

            element.innerHTML+=text.charAt(index);

            index++;

            if(index>=text.length){

                clearInterval(timer);

            }

        },70);

    });

}

/*==========================================================
  HEADING REVEAL
==========================================================*/

function initHeadingReveal(){

    document.querySelectorAll(".section-title")

    .forEach(title=>{

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    title.classList.add("title-show");

                }

            });

        });

        observer.observe(title);

    });

}

/*==========================================================
  TEXT PARALLAX
==========================================================*/

function initTextParallax(){

    window.addEventListener("scroll",()=>{

        document.querySelectorAll(".parallax-text")

        .forEach(text=>{

            const speed=

            text.dataset.speed || .2;

            text.style.transform=

            `translateY(${window.scrollY*speed}px)`;

        });

    });

}

/*==========================================================
  FADE WORDS
==========================================================*/

function initFadeWords(){

    document.querySelectorAll(".fade-words")

    .forEach(element=>{

        const words=

        element.dataset.words;

        if(!words) return;

        const list=

        words.split(",");

        let current=0;

        element.innerHTML=list[0];

        setInterval(()=>{

            element.style.opacity="0";

            setTimeout(()=>{

                current++;

                if(current>=list.length){

                    current=0;

                }

                element.innerHTML=

                list[current];

                element.style.opacity="1";

            },350);

        },3000);

    });

}

/*==========================================================
  GOLDEN UNDERLINE
==========================================================*/

document.querySelectorAll(".luxury-link")

.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.classList.add("underline-active");

    });

    link.addEventListener("mouseleave",()=>{

        link.classList.remove("underline-active");

    });

});

/*==========================================================
  BUTTON SCALE
==========================================================*/

document.querySelectorAll(".premium-btn")

.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform=

        "scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform=

        "scale(1)";

    });

});

/*==========================================================
  ICON FLOAT
==========================================================*/

document.querySelectorAll(".floating-icon")

.forEach(icon=>{

    let direction=1;

    let position=0;

    setInterval(()=>{

        position+=direction;

        if(position>10){

            direction=-1;

        }

        if(position<-10){

            direction=1;

        }

        icon.style.transform=

        `translateY(${position}px)`;

    },40);

});
