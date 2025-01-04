let fal = false;

//section skills
let skills = document.querySelector(".skills");
let numss = document.querySelectorAll(`[data-numss]`);
let span = document.querySelectorAll(".skills .target div span");

function target(e) {
    let p = 0;
    let goal = e.dataset.numss;
    let counter = setInterval(() => {
        p++;
        let cr = e.textContent++;
        e.innerHTML = `${p}`;
        if (p == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}

function targ() {
    if (window.scrollY >= skills.offsetTop) {
        if (!fal) {
            numss.forEach((o) => target(o));
        }
        fal = true;
    }
}
//window.addEventListener("scroll", targ);

function width(e) {
    let l = 0;
    let goal = e.dataset.n;
    let counter = setInterval(() => {
        l++;
        e.style.width = `${l}%`;
        if (l == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}
function wid() {
    if (window.scrollY >= skills.offsetTop) {
        if (!fal) {
            span.forEach((o) => width(o));
        }

        fal = true;
    }
}
//window.addEventListener("scroll", wid);

//section latest
let latest = document.querySelector(".latest");
let nums100 = document.querySelectorAll(`[data-nums]`);
let timeAftermonth = new Date("Dec 29,2023 23:59:59").getTime();

function con(e) {
    let counter = setInterval(() => {
        let timeNow = new Date().getTime();
        let timeDiff = timeAftermonth - timeNow;
        let day = timeDiff / (1000 * 60 * 60 * 24);
        let hou = (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60); //(1000*60*60);
        let mint = (timeDiff % (1000 * 60 * 60)) / (1000 * 60);
        let sec = (timeDiff % (1000 * 60)) / 1000;
        nums100[0].innerHTML = Math.floor(day);
        nums100[1].innerHTML = Math.floor(hou);
        nums100[2].innerHTML = Math.floor(mint);
        nums100[3].innerHTML =
            Math.floor(sec) < 10 ? `0${Math.floor(sec)}` : Math.floor(sec);
        if (timeDiff == 0) {
            clearInterval(counter);
        }
    }, 1000);
}
con();

//section stats

let num100 = document.querySelectorAll(`[data-num]`);
let card = document.querySelector(".klo");
function cont(e) {
    let goal = e.dataset.num;
    let counter = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(counter);
        }
    }, 4000 / goal);
}

function stats() {
    if (window.scrollY >= card.offsetTop) {
        if (!fal) {
            num100.forEach((o) => cont(o));
        }
        fal = true;
    }
}

//document.addEventListener("scroll", stats);
//section latest events
/*let nums1000 = document.querySelector(`[data-nums]`);
let date = new Date();
//nums1000.innerHTML = date.getSeconds();
document.write(nums1000.textContent);
function conts(e) {
    let goal = e.dataset.nums;
    let counter = setInterval(() => {
        e.textContent--;
        if (e.textContent == goal) {
            clearInterval(counter);
        }
    }, 10000 / goal);
}
//function las() {
    if (window.scrollY >= latest.offsetTop) {
        if (!fal) {
            nums100.forEach((o) => conts(o));
        }
        fal = true;
    }
}*/
