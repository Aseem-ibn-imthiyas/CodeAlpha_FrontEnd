// Close the welcome overlay when clicked
function closeWelcomeOverlay() {
    document.getElementById("welcomeOverlay").style.display = "none";
}

// Open the image modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

// Close the image modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
