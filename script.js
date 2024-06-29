document.addEventListener("DOMContentLoaded", function () {
  const colorButton = document.querySelector(".button");
  const heading = document.querySelector(".bg");

  colorButton.addEventListener("click", function () {
    let newColor = randomColor();
    document.body.style.backgroundColor = newColor; // Set background color of body
    heading.innerHTML = `Background color: ${newColor}`;
  });

  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
