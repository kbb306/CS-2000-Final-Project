// Variables
var coll = document.getElementsByClassName("collapsible");
var i;

function toggleHamburgerNav() {
    let navMenu = document.getElementById("mobileNav")
    if (navMenu.style.display === "none") {
        navMenu.style.display = "block"
    }
    else {
        navMenu.style.display = "none"
    }
}

// For collapsible content, hides the content or shows depending on if it was already clicked.
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 