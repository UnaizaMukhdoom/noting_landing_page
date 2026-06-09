// Toggle visibility of the element with id "aiMenu"
function toggleMenu() {
    const menu = document.getElementById("aiMenu");
    if (!menu) return; // element not present

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}