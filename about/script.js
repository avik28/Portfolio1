document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    // Animate headings one by one on load
    dropdowns.forEach((dropdown, index) => {
        setTimeout(() => {
            dropdown.classList.add("visible");
        }, index * 300); // Staggered floating effect
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            // Close all other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this) {
                    otherDropdown.classList.remove("open");
                    otherDropdown.nextElementSibling.style.display = "none";
                    otherDropdown.querySelector(".arrow").style.transform = "rotate(0deg)";
                }
            });

            // Toggle the clicked dropdown
            this.classList.toggle("open");
            content.style.display = content.style.display === "block" ? "none" : "block";
            arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        });
    });
});
