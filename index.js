let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('activex');
}
// slide
var slides = document.querySelectorAll('.slider');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slider) => {

        slider.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });


    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}


btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;

    });
});




// autoplay
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });


            slides[i].classList.add('active')
            btns[i].classList.add('active')
            i++;

            if (slides.length == i) {
                i = 0
            }
            if (i >= slides.length) {
                return;
            }
            repeater();

        }, 10000);
    }
    repeater();
}
repeat();

// đánh giá
$(document).ready(function () {
    $('.testi-content').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='bx bx-left-arrow-alt' ></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='bx bx-right-arrow-alt'></i></button>",
        
    });
});


// đăng kí nhận tên
function validation( ){
    alert("working");
}