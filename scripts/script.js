function toggleHamburgerNav() {
    let navMenu = document.getElementById("mobileNav")
    if (navMenu.style.display === "none") {
        navMenu.style.display = "block"
    }
    else {
        navMenu.style.display = "none"
    }
}