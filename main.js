var images = ["Family book.jpeg", "mother.jpg", "sister.png", "brother.jpg", ];
var i = 0;

function nextslide() {
    document.getElementById("album").src = images[i];
    i++;

    if (i == 8) {
        i = 0;
    }
}