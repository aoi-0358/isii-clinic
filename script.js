function loaded() {
  document.getElementById("loading").classList.remove("active");
}
window.addEventListener("load", function() {
  setTimeout(loaded, 500)
})
setTimeout(loaded, 5000)




const targetElement = document.querySelectorAll(".AnimationTarget");
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})
