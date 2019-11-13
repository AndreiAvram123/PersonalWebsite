function loadImages(numberOfImages) {
    var modalContent = document.getElementById("modal-content");
    for (let i = 1; i <= numberOfImages; i++) {
        var div = document.createElement("div");
        div.className = "mySlides";
        var image = document.createElement("img");
        image.className = "responsive-image image-modal";
        //path withing the calling file
        image.src = "images/image_main" + i + ".jpg";
        div.appendChild(image);
        modalContent.appendChild(div);
    }
}

function openModal() {
    // Get the modal
    var modal = document.getElementById("my-modal");

    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    currentSlide(1);
}

function closeModal() {
    var modal = document.getElementById("my-modal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal

    modal.style.display = "none";

}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Thumbnail image controls
 Function called for a specific image index and a category
 Example: When the user clicks the first category, this function is called
 with n=1 and category index=1
 */

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 *
 */
function showSlides(n) {
    var i;
    var modal = document.getElementById("my-modal")
    var slides = modal.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(slideIndex);
    slides[slideIndex - 1].style.display = "block";

}
