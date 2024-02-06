var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    // setTimeout(closepreloader, 3000);
    loader.style.display = "none";
});

function closepreloader() {
    document.getElementById("preloader").style.display = 'none';
    document.getElementById("body").style.overflow = 'scroll';
}

    // window.addEventListener("load", function () {
    // setTimeout(closepreloader, 3000);
// });