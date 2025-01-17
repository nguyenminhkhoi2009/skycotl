function viewImageFullscreen(imgSrc) {
    // Create the modal
    const modal = document.createElement("div");
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.animation = "fadeIn 0.5s";

    // Create the image
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.maxHeight = "100vh";
    img.style.maxWidth = "100%";
    img.style.animation = "scaleIn 0.5s";

    // Append the image to the modal
    modal.appendChild(img);

    // Close the modal with animation when clicked
    modal.addEventListener("click", function() {
        img.style.animation = "scaleOut 0.5s";
        modal.style.animation = "fadeOut 0.5s";

        setTimeout(() => {
            modal.remove();
        }, 500);
    });

    // Append the modal to the body
    document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image img");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            viewImageFullscreen(image.src);
        });
    });
});
