const navContent = document.querySelector(".closeThisNav");

window.onload = function () {
  setTimeout(execCloseNav(), 1000);
};

function execCloseNav() {
  navContent.classList.remove("show");
}
