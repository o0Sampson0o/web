let head_bgimg;
let head_title;

let width, height; //windows width, height

let eqs; //heros background equations
let param = []; //parameter for equations

function initVar()
{
    width = window.innerWidth;
    height = window.innerHeight;

    head_bgimg = document.querySelector("#head-background-img");
    head_title = document.querySelector("#head-title");

    eqs = document.querySelectorAll(".eq");

    eqs.forEach(e => {
        param.push([(Math.random()**4 + 0.25)/1.5, Math.random(), Math.random()]); //size, x, y
    });
}

function initStyle()
{
    eqs.forEach((e, i) => {
        let size = param[i][0];
        let x = param[i][1];
        let y = param[i][2];

        e.style.left = `${ x*width/2 - width/16 }px`;
        e.style.top = `${ y*height/2 + height/4 }px`;
        e.style.transform = `scale(${ size })`;
        e.style.filter = `blur(${ 5*size }px) brightness(${ 1 - size/2 })`;
    });

    head_bgimg.style.top = "0px";

    head_title.style.top = `${ height/2 }px`;
    head_title.style.left = `${ width/2 - head_title.clientWidth/2 }px`;
}

function scroll(event)
{
    head_bgimg.style.top = `${ window.scrollY*0.5 }px`;
    head_title.style.top = `${ window.scrollY*0.3 + height/2 }px`;
    eqs.forEach((e, i) => {
        e.style.top = `${ window.scrollY * -(param[i][0]**2) + param[i][2]*height/2 + height/4 }px`;
    });
}

window.addEventListener('load', (event) => {
    initVar();
    initStyle();
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", (event) => {
        width = window.innerWidth;
        height = window.innerHeight;
        initStyle();
    })
});