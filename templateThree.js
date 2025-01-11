
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
    increaseCounter();
})

//section skills

function fullWidthTargetPercentage() {
    window.addEventListener('scroll',()=>{
    console.log( skills.getBoundingClientRect().top,skills.getBoundingClientRect().bottom,window.innerHeight,window.scrollY,skills.getBoundingClientRect().height);
                if ( skills.getBoundingClientRect().top>(-window.innerHeight / 3)&& skills.getBoundingClientRect().top<(window.innerHeight / 2) ){
            fullWidthTarget.forEach(element=>{
                console.log(element.dataset.n)
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
function getDataNums(element) {
    let goal = element.dataset.num;
    let counter = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(counter);
        }
    }, 3000 / goal);
}

function increaseCounter() {
        window.addEventListener('scroll',()=>{
    if ( card.getBoundingClientRect().top>(-window.innerHeight / 3)&& card.getBoundingClientRect().top<(window.innerHeight / 2) ){
        if (isCount) {
            dataNum.forEach((element) => getDataNums(element));
        }
        isCount = false;
    }
    if ( !(card.getBoundingClientRect().top<skills.getBoundingClientRect().height&& card.getBoundingClientRect().top>-card.getBoundingClientRect().height)){
        dataNum.forEach((element) =>{
            element.textContent=0});
        isCount=true;
    }
})
}



