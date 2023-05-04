// Modal
// Get all images with class "myImg"
let images = document.getElementsByClassName("myImg");

// Loop through all images and add an onclick event to each one
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    // Get the modal that corresponds to the clicked image
    let modal = this.parentNode.parentNode.querySelector(".modal");

    // Get the modal image, caption, and close button
    let modalImg = modal.querySelector(".modal-content");
    let captionText = modal.querySelector(".caption");
    let closeButton = modal.querySelector(".close");

    // Set the modal image src and caption text
    modalImg.src = this.src;
    captionText.innerHTML = this.dataset.caption;

    // Display the modal
    modal.style.display = "block";

    // When the user clicks on the close button, hide the modal
    closeButton.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // When the user presses the "Escape" key, hide the modal
    window.onkeydown = function(event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    }
  }
}


// Preloader
window.onload = function () {
  document.body.classList.add('loaded');
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}











