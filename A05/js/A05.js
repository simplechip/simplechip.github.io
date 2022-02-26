// var myImages = ["images/Cat.jpg", "images/Dog.jpg", "images/Lion.jpg", "images/Orca.jpg", "images/Rabbit.jpg", ];

var captionImages = ["Cat", "Dog", "Lion", "Orca", "Rabbit"];

var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = "images/" + captionImages[index] + ".jpg";
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function nextImg() {
    if (captionImages.length == index + 1)
        index = 0;
    else
        index++;
    updateImage();
}

function backImg() {
    if (index === 0)
        index = captionImages.length - 1;
    else
        index--;
    updateImage();
}

var nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextImg, false);

var backBtn = document.getElementById("back");
backBtn.addEventListener("click", backImg, false);

function autoSlide() {
    if (document.getElementById("auto").checked)
        nextImg();
}
setInterval(autoSlide, 2000);