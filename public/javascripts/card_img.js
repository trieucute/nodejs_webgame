let slideIndexs = 1;
showSlides(slideIndexs);

function plusSlides(n) {
  showSlides(slideIndexs += n);
}

function currentSlide(n) {
  showSlides(slideIndexs = n);
}

function showSlides(n) {
  let i;
  let slides= document.getElementsByClassName("mySlides_pro");
  let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_img", "");
  }
 
  slides[slideIndexs-1].style.display = "block";
  dots[slideIndexs-1].className += " active_img";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}
