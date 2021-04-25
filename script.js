let hamburger = document.querySelector(".btn");
let navLists = document.getElementById("nav_links_container");
let divv = document.querySelector(".nav_links");
let btn = document.getElementById("btn");
let getWidth = document.querySelector(".getWidth");
let grid = document.querySelector("#grid");
let gridWidth = document.querySelector('#width');
console.log(divv.classList[0]);

hamburger.addEventListener("click",()=>{
    if(divv.classList[1] === undefined){
        divv.classList.add("show_links");
        btn.classList.add("rotate");
    }
    else{
        divv.classList.remove("show_links");
        btn.classList.remove("rotate");
    }
    
})

getWidth.addEventListener("click",()=>{
    
    grid.textContent = window.innerWidth;
    gridWidth.textContent = window.innerHeight;
})
