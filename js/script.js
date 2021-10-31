var bar = document.querySelector(".bar");
var open = document.querySelector(".openbutton")
var close = document.querySelector(".closebutton")

open.addEventListener("click", ()=>{
    bar.style.display="block"
})

close.addEventListener("click", ()=>{
    bar.style.display="none"
})