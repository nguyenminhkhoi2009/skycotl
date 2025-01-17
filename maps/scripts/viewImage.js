function viewImageFullscreen(imgElement) {
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
    modal.style.zIndex = "1000";
    modal.style.animation = "fadeIn 0.5s";

    const img = imgElement.cloneNode(true);
    img.style.maxHeight = "100vh";
    img.style.maxWidth = "100%";
    img.style.animation = "scaleIn 0.5s";

    modal.appendChild(img);

    modal.addEventListener("click", function() {
        img.style.animation = "scaleOut 0.5s";
        modal.style.animation = "fadeOut 0.5s";

        setTimeout(() => {
            modal.remove();
        }, 500);
    });

    document.body.appendChild(modal);
}

function initializeImageClickEvents() {
    const images = document.querySelectorAll(".clickable-image");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            viewImageFullscreen(image);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initializeImageClickEvents();
});
