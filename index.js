

let toggle = document.getElementsByClassName("toggle-button")[0];
console.log(toggle);
let links = document.getElementsByClassName("nav-links")[0];
toggle.addEventListener('click', () => {
    links.classList.toggle('active');
})



//slider
var slideIndex = 0;
slideshow();
function slideshow() {
    var i;
    let slide = document.querySelectorAll(".simg ");
    console.log(slide.length);
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slide.length) { slideIndex = 1 }
    console.log(slideIndex);
    slide[slideIndex - 1].style.display = "flex";
    setTimeout(slideshow, 2000);

}


