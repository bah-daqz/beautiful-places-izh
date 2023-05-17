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
    document.body.classList.add('no-scroll');


    
    closeButton.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove('no-scroll')
    }

    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    
    window.onkeydown = function(event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll')
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











