const images = [...Array(7)].map((item, index) => `${index}.jpeg`);

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `assets/img/${chosenImage}`;

document.body.appendChild(image);