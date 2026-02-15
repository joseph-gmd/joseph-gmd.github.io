window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    const placeholder = document.getElementById("navbarPlaceholder");
    const topBar = document.querySelector(".top-contact-bar");
    const topBarHeight = topBar.offsetHeight;

    if (window.scrollY > topBarHeight - 5) {
        if (!navbar.classList.contains("fixed")) {
            navbar.classList.add("fixed");
            placeholder.style.height = navbar.offsetHeight + "px";
        }
    } else {
        navbar.classList.remove("fixed");
        placeholder.style.height = "0px";
    }
});


AOS.init({
    duration: 800,
    once: true
});