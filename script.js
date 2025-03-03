document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showintro");
    const intro = document.getElementsByClassName("intro")[0]; // Select the first <p> with class "intro"

    button.addEventListener("click", function () {
        if (intro.style.filter === "blur(5px)" || intro.style.filter === "") {
            intro.style.filter = "blur(0px)"; // Remove blur
            intro.style.opacity = "1"; // Make it fully visible
        } else {
            intro.style.filter = "blur(5px)"; // Apply blur again
            intro.style.opacity = "0.5"; // Make it semi-transparent
        }
    });
});
