function swapTheme() {
    const appDiv = document.getElementById("app");
    const button = document.getElementById("swap");

    // toggle div theme
    appDiv.classList.toggle("day");
    appDiv.classList.toggle("night");

    // toggle button theme
    button.classList.toggle("button_day");
    button.classList.toggle("button_night");
}