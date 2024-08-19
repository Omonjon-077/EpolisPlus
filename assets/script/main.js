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

    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

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
                btn.className = 'bx bx-show show-hide';
                btn.previousElementSibling.type = 'password';
                num = 0
            } else {
                btn.className = 'bx bx-hide show-hide';
                btn.previousElementSibling.type = 'text';
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

/*=============== Profile page | progressbar ===============*/
if ($(".progress-arc").length) {
    document.addEventListener('DOMContentLoaded', () => {
        const arcBackground = document.querySelectorAll('.progress-arc__background');
        const arcProgress = document.querySelectorAll('.progress-arc__progress');
        const valueText = document.querySelectorAll('.progress-arc__value');

        function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
            const angleInRadians = (angleInDegrees - 270) * Math.PI / 180.0;
            return {
                x: centerX + (radius * Math.cos(angleInRadians)),
                y: centerY + (radius * Math.sin(angleInRadians))
            };
        }

        function describeArc(x, y, radius, startAngle, endAngle) {
            const start = polarToCartesian(x, y, radius, endAngle);
            const end = polarToCartesian(x, y, radius, startAngle);
            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
            return [
                "M", start.x, start.y,
                "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
            ].join(" ");
        }

        function setProgress(percent, min = 0, max = 100) {
            const centerX = 100;
            const centerY = 100;
            const radius = 92;
            const startAngle = 45;
            const endAngle = 315;
            const totalAngle = endAngle - startAngle;


            arcBackground.forEach(color => {
                color.setAttribute("d", describeArc(centerX, centerY, radius, startAngle, endAngle));
            })

            const progressAngle = startAngle + (percent.textContent / (max - min)) * totalAngle;
            let parentClosest = percent.closest('.progress-arc')
            if(parentClosest)
            {
                let arcPro = parentClosest.querySelector('.progress-arc__progress');
                arcPro.setAttribute("d", describeArc(centerX, centerY, radius, startAngle, progressAngle));
            }
        }

        valueText.forEach((item,index) => {
            setProgress(item, 0, 365);
        });
    });
}