var slideIndex = 0;
slideshow();
function slideshow() {
    var i;
    let slide = document.querySelectorAll(".galimg ");
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