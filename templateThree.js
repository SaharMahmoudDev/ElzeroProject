
'use strict'
// global varibals
let isCount = true;

// section skills
let skills = document.querySelector(".skills");
let numsTarget = document.querySelectorAll(".skills .target h3 span");
let fullWidthTarget = document.querySelectorAll(".skills .target div span");
let dataNums= document.querySelectorAll("[data-nums]");

//section latest
let latest = document.querySelector(".latest");
let nums100 = document.querySelectorAll(`[data-nums]`);
let timeAftermonth = new Date("Dec 29,2023 23:59:59").getTime();

//section stats
let dataNum= document.querySelectorAll(`[data-num]`);
let card = document.querySelector(".klo");


document.addEventListener('DOMContentLoaded',()=>{
    fullWidthTargetPercentage();
    decreaseCounter();
    observ.observe(card);
})

// section skills
function fullWidthTargetPercentage() {
    window.addEventListener('scroll',()=>{
                if ( skills.getBoundingClientRect().top>(-window.innerHeight / 3)&& skills.getBoundingClientRect().top<(window.innerHeight / 2) ){
            fullWidthTarget.forEach(element=>{
                element.style.width=`${element.dataset.n}%`;
            })
            numsTarget.forEach(element=>{
                element.innerHTML=`${element.dataset.numss}%`
            })
        }
        if ( !(skills.getBoundingClientRect().top<skills.getBoundingClientRect().height&& skills.getBoundingClientRect().top>-skills.getBoundingClientRect().height)){
fullWidthTarget.forEach(element=>{
    element.style.width='0%';
})
numsTarget.forEach(element=>{
    element.innerHTML=`0%`
})
        }
    })
  
}

//section latest

function decreaseCounter() {
    let counter = setInterval(() => {
        let timeNow = new Date().getTime();
        let timeDiff = timeAftermonth - timeNow;
        let day = timeDiff / (1000 * 60 * 60 * 24);
        let hou = (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60); 
        let mint = (timeDiff % (1000 * 60 * 60)) / (1000 * 60);
        let sec = (timeDiff % (1000 * 60)) / 1000;
        nums100[0].innerHTML =  Math.floor(day) < 10 ? `0${Math.floor(day)}` : Math.floor(day);
        nums100[1].innerHTML = Math.floor(hou) < 10 ? `0${Math.floor(hou)}` : Math.floor(hou);
        nums100[2].innerHTML = Math.floor(mint) < 10 ? `0${Math.floor(mint)}` : Math.floor(mint);
        nums100[3].innerHTML =
            Math.floor(sec) < 10 ? `0${Math.floor(sec)}` : Math.floor(sec);
        if (timeDiff <= 0) {
            clearInterval(counter);
        }
    }, 1000);
}

//section stats

function getDataNums() {
    if(isCount) return;
    isCount=true;
    dataNum.forEach((element,ind,arr) =>{
    let  goal = parseInt(element.dataset.num);
    let counter = setInterval(() => {
        if (element.textContent >= goal) {
            clearInterval(counter);
        }
        else{
             element.textContent++; 
        }

    }, 3000 / goal );
})
}
function resetCounter(){
    dataNum.forEach((element) =>{
    element.textContent=0;
    isCount=false;
    })
}
const observ=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if(entry.isIntersecting){
        getDataNums();
    }
    else{
        resetCounter();
    }
})
},{threshold:.25});

