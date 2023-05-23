const backtotop = document.getElementById("back-to-top")

backtotop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior:'smooth'})
})