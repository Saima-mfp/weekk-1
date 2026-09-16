/* Select the menu button and navigation links */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* Open or close the mobile navigation */
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the button icon
    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

/* Close the menu after selecting a navigation link */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});s