//your JS code here. If required.
// Scroll animation for header text
window.addEventListener("DOMContentLoaded", () => {
    const scrollText = document.getElementById("scroll-text");
    let scrollPosition = scrollText.offsetWidth;

    function scroll() {
        scrollPosition--;
        if (scrollPosition < -scrollText.offsetWidth) {
            scrollPosition = window.innerWidth;
        }
        scrollText.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});
