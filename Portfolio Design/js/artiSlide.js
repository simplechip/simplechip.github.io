var index = 0;
var artiNum = ["1", "2", "3", "4", "5"];
var link = ["Artifact01.html", "chessboard.html", "Artifact03-Rhombus.html", "art4/index.html", "A05.html"]
var description = ["Resume: A webpage that uses standard HTML tags only.  No CSS included", "Chessboard: Displays a chessboard using div and CSS.", "Rhombus: Utilizing JS on top of HTML and CSS to create a Rhombus of different size and colors.", "Form: uses JS to perform local checks results before contents are sent.", "Slideshow: A combination of HTML, CSS, and JS to create an interation of buttons and images."]

function updateSlide() {
    document.getElementById("artiSlide").src = "./pic/artiThumb/A0" + artiNum[index] + "Thumb.jpg";
    document.getElementById("artiSlide").alt = "A0" + artiNum[index] + " Thumbnail";
    document.getElementById("slideHead").innerHTML = "Artifact " + artiNum[index] + " of " + artiNum.length + " (Click on image for solution)";
    document.getElementById("artiLink").href = "artifact/A0" + artiNum[index] + "/" + link[index];
    document.getElementById("artiDesc").innerHTML = description[index]
}

function nextSlide() {
    if (artiNum.length == index + 1)
        index = 0;
    else
        index++;
    updateSlide();
}

function prevSlide() {
    if (index === 0)
        index = artiNum.length - 1;
    else
        index--;
    updateSlide();
}

var nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextSlide, false);

var backBtn = document.getElementById("prev");
backBtn.addEventListener("click", prevSlide, false);