// Optional JS: Add 'animated' class after page load
window.addEventListener("load", () => {
    document.querySelectorAll('.animated').forEach(el => {
        el.classList.add("start-animation");
    });
});
