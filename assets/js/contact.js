/*==========================================================
  WITH YOU - Luxury Perfume Store
  CONTACT JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeContactForm();
    initializeNewsletter();
    initializeWhatsApp();
    initializeCallButton();
    initializeEmailButton();
    initializeMapButton();

});

/*=========================================
  CONTACT FORM
=========================================*/

function initializeContactForm(){

    const form = document.getElementById("contactForm");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        if(validateContactForm()){

            showMessage(
                "Thank you! We will contact you soon.",
                "success"
            );

            form.reset();

        }

    });

}

/*=========================================
  VALIDATION
=========================================*/

function validateContactForm(){

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const message=document.getElementById("message");

    if(!name.value.trim()){

        alert("Please enter your name.");
        name.focus();
        return false;

    }

    if(!email.value.trim()){

        alert("Please enter your email.");
        email.focus();
        return false;

    }

    if(!message.value.trim()){

        alert("Please enter your message.");
        message.focus();
        return false;

    }

    return true;

}

/*=========================================
  NEWSLETTER
=========================================*/

function initializeNewsletter(){

    const form=document.getElementById("newsletterForm");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email=document.getElementById("newsletterEmail");

        if(email.value===""){

            alert("Enter your email.");
            return;

        }

        alert("Subscribed Successfully!");

        form.reset();

    });

}

/*=========================================
  WHATSAPP
=========================================*/

function initializeWhatsApp(){

    document.querySelectorAll(".whatsapp-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            window.open(

                "https://wa.me/918780423959",

                "_blank"

            );

        });

    });

}

/*=========================================
  CALL BUTTON
=========================================*/

function initializeCallButton(){

    document.querySelectorAll(".call-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            window.location.href="tel:+918780423959";

        });

    });

}

/*=========================================
  EMAIL
=========================================*/

function initializeEmailButton(){

    document.querySelectorAll(".email-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            window.location.href="mailto:withyou.in@gmail.com";

        });

    });

}

/*=========================================
  GOOGLE MAP
=========================================*/

function initializeMapButton(){

    document.querySelectorAll(".map-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            window.open(

                "https://maps.google.com/?q=VR+Surat",

                "_blank"

            );

        });

    });

}

/*=========================================
  MESSAGE
=========================================*/

function showMessage(message,type){

    console.log(type + " : " + message);

}

/*=========================================
  EXPORT
=========================================*/

window.showMessage=showMessage;
window.validateContactForm=validateContactForm;
