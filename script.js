let navbar = document.querySelector("nav");
let menulinks = document.getElementById("menu-links");

function ToggleMenu(){
    menulinks.classList.toggle("show-menu");
}

window.onscroll = function(){
    if (window.scrollY > 0){
        navbar.style.background = "#ffc266";
    }
    else{
        navbar.style.background = 'transparent';
    }
}