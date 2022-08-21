let hero_bgimg;
let hero_title;

let width;
let height;
let eqs;
let param = [];

function initVar()
{
    hero_bgimg = document.querySelector(".hero-background-img");
    hero_title = document.querySelector(".hero-title");
    eqs = document.querySelectorAll(".eq");
    width = window.innerWidth;
    height = window.innerHeight;

    eqs.forEach(e => {
        let r = (Math.random()**4+0.25)/1.5;
        let rx = Math.random()*width/2 - width/16;
        let ry = Math.random()*height/2 + height/4;
        param.push([r, rx, ry]);
    });
}

function initStyle()
{
    eqs.forEach((e, i) => {
        e.style.left = `${param[i][1]}px`;
        e.style.top = `${param[i][2]}px`;
        e.style.transform = `scale(${param[i][0]})`;
        e.style.filter = `blur(${5*(param[i][0])}px) brightness(${1-param[i][0]/2})`;
    });

    hero_bgimg.style.top = "0px";
    hero_title.style.top = `${height/2}px`;
    hero_title.style.left = `${width/2 - hero_title.clientWidth/2}px`;
}

window.addEventListener('load', (event) => {
    initVar();
    initStyle();
    window.addEventListener("scroll", (event) => {
        hero_bgimg.style.top = `${window.scrollY * 0.5}px`;
        hero_title.style.top = `${window.scrollY * 0.3 + height/2}px`;
        eqs.forEach((e, i) => {
            e.style.top = `${window.scrollY * -(param[i][0]**2) + param[i][2]}px`;
        });
    });
});