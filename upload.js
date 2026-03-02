const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const preview = document.getElementById("preview");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    const file = inputFile.files[0];
    if (file) {
        const imgLink = URL.createObjectURL(file);
        
        // Apply the image to the background
        preview.style.backgroundImage = `url(${imgLink})`;
        
        // Remove the dashed border and hide the text
        preview.style.border = "none";
        preview.classList.add("has-image"); 
    }
}

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    preview.style.background = "#fdf0fe";
});

dropArea.addEventListener("dragleave", () => {
    preview.style.background = "transparent";
})

dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    preview.style.background = "transparent";
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});