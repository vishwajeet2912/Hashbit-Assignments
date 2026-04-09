function createDiv(width, height, text) {

    const container = document.getElementById("container");

    const newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";

    newDiv.innerText = text;

    container.appendChild(newDiv);
}

// Do not change this
window.createDiv = createDiv;