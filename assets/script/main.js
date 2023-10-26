/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");
});

/*=============== HEADER FIXED ===============*/
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

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play()
        videoFile.style = "backround: initial;width: 100% !important; max-height: 679px; height: 100%;"
        videoButton.classList.add('play-self')
        // We change the icon
        videoIcon.classList.add('bx-pause')
        videoIcon.classList.remove('bx-play')
    } else {
        // Pause video
        videoFile.pause();
        videoButton.classList.remove('play-self')
        // We change the icon
        videoIcon.classList.remove('bx-pause')
        videoIcon.classList.add('bx-play')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('bx-pause')
    videoIcon.classList.add('bx-play')
}

// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)