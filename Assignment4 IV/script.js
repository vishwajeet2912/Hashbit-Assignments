const text = document.getElementById("text-container");

// Change color
document.getElementById("colorchange").onclick = function () {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
};

// Change font size
document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

// Italic toggle
document.getElementById("italic").onclick = function () {
    text.style.fontStyle = 
        text.style.fontStyle === "italic" ? "normal" : "italic";
};

// Underline toggle
document.getElementById("underline").onclick = function () {
    text.style.textDecoration = 
        text.style.textDecoration === "underline" ? "none" : "underline";
};

// Bold toggle
document.getElementById("bold").onclick = function () {
    text.style.fontWeight = 
        text.style.fontWeight === "bold" ? "normal" : "bold";
};

// Font family change
document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

// Get CSS properties
document.getElementById("getstyle").onclick = function () {
    const styles = `
color: ${text.style.color || "black"};
font-size: ${text.style.fontSize || "55px"};
font-family: ${text.style.fontFamily || "sans-serif"};
text-decoration: ${text.style.textDecoration || "none"};
font-style: ${text.style.fontStyle || "normal"};
font-weight: ${text.style.fontWeight || "normal"};
`;

    document.getElementById("css-props").innerText = styles;
};