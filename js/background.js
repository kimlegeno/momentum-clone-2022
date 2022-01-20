const images = ["nature0.jpg", "nature1.jpg", "nature2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/bg/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.classList.add("bg-img");
