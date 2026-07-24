/*==========================================================
 XE ĐIỆN TÂN AN
 app.js
 Version 1.0
==========================================================*/

"use strict";

/*==========================================================
DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initWebsite();

});

/*==========================================================
INIT
==========================================================*/

function initWebsite(){

    backToTop();

    counterAnimation();

    revealAnimation();

    smoothScroll();

}

/*==========================================================
HELPER
==========================================================*/

function $(selector){

    return document.querySelector(selector);

}

function $$(selector){

    return document.querySelectorAll(selector);

}
/*==========================================================
BACK TO TOP
==========================================================*/

function backToTop(){

    const button = $(".back-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*==========================================================
SMOOTH MENU
==========================================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}
/*==========================================================
COUNTER
==========================================================*/

function counterAnimation(){

    const counters=document.querySelectorAll(".number");

    if(counters.length===0) return;

    let started=false;

    function startCounter(){

        if(started) return;

        const section=document.querySelector(".counter");

        if(!section) return;

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-150){

            started=true;

            counters.forEach(counter=>{

                const target=+counter.dataset.number;

                let current=0;

                const step=Math.max(1,Math.ceil(target/120));

                function update(){

                    current+=step;

                    if(current>=target){

                        current=target;

                    }

                    if(target>=100){

                        counter.innerText=current.toLocaleString()+"+";

                    }else{

                        counter.innerText=current+"+";

                    }

                    if(current<target){

                        requestAnimationFrame(update);

                    }

                }

                update();

            });

        }

    }

    window.addEventListener("scroll",startCounter);

    startCounter();

}
