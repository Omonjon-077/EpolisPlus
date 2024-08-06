/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");
});

/*=============== Header fixed ===============*/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

/*=============== Hide & show password ===============*/
if ($(".show-hide").length) {
    let showHideBtn = document.querySelectorAll('.show-hide');
    let num;
    showHideBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (num === 1) {
                btn.className='bx bx-show show-hide';
                btn.previousElementSibling.type='password';
                num = 0
            } else {
                btn.className='bx bx-hide show-hide';
                btn.previousElementSibling.type='text';
                num = 1
            }
        });
    })
}

/*=============== Intro swiper ===============*/
if ($(".introSwiper").length) {
    let swiperIntro = new Swiper(".introSwiper", {
        grabCursor: true,
        spaceBetween: 40,
        speed: 700,
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: true,
    });
}

/*=============== Calculator swiper ===============*/
if ($(".calculatorSwiper").length) {
    let swiperCalculator = new Swiper(".calculatorSwiper", {
        centeredSlides: false,
        loop: false,
        grabCursor: true,
        speed: 850,
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 2500,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            // when window width is >= 1200px
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            // when window width is >= 1400px
            1200: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    });
}

/*=============== Partners swiper ===============*/
if ($(".partnersSwiper").length) {
    let swiper = new Swiper(".partnersSwiper", {
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 0,
            }
        }
    });
}

/*=============== Show scroll up ===============*/
if ($("#scroll-up").length) {
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp);
}

/*=============== Calculator section | services ===============*/
if ($(".services-box").length) {
    document.addEventListener('DOMContentLoaded', (event) => {
        const checkbox = document.querySelectorAll('.services-box input[type=checkbox]');

        checkbox.forEach(item => {
            item.addEventListener('change', () => {
                if (item.checked) {
                    item.parentElement.parentElement.classList.add('active');
                } else {
                    item.parentElement.parentElement.classList.remove('active');
                }
            });
        });
    });
}