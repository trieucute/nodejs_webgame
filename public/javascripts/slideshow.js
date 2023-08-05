// slide show


var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-content");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].classList.remove("active"); 
    }
 

    slides[slideIndex].classList.add("active");  
   
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }



// card slider 
let next = document.getElementsByClassName("owl-next");
let prev = document.getElementsByClassName("owl-prev");
let product_slide = document.getElementsByClassName("content-row-new-product")
// let product_slide = document.getElementById("content-row-product");
let product_page = Math.ceil(product_slide.length/4);
let l =0;
let movePer = 25.57;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 608px)");
if (mob_view.matches)
{
 movePer = 50.36;
 maxMove = 504;
}
let right_mover = ()=>{
l = l + movePer;
if (product_slide  == 1){l = 0; }

for(const i of product_slide )
{
    if (l > maxMove){l = 0;}
    
    i.style.left = '-' + l + '%';
}

}
let left_mover = ()=>{
l = l - movePer;
if (l<=0){l = 0;}
for(const i of product_slide ){
    // if (product_page>1){
        i.style.left = '-' + l + '%';
    // }
}
}

next[0].onclick = ()=>{right_mover();}
prev[0].onclick = ()=>{left_mover();}