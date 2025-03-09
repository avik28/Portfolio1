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

            // Close all other dropdowns smoothly
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this) {
                    otherDropdown.classList.remove("open");
                    otherDropdown.nextElementSibling.style.maxHeight = "0px";
                    otherDropdown.nextElementSibling.style.opacity = "0";
                    otherDropdown.querySelector(".arrow").style.transform = "rotate(0deg)";
                }
            });

            // Toggle the clicked dropdown
            this.classList.toggle("open");
            if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
                arrow.style.transform = "rotate(180deg)";
            } else {
                content.style.maxHeight = "0px";
                content.style.opacity = "0";
                arrow.style.transform = "rotate(0deg)";
            }
        });
    });
});
