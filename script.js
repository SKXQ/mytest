function renameImage() {
    var imageLink = document.getElementById("imageLink").value;
    var imageName = document.getElementById("imageName").value;
    
    if (imageLink.trim() === "" || imageName.trim() === "") {
        alert("Please paste an image link and enter a name.");
        return;
    }

    var imageElement = document.createElement("img");
    imageElement.src = imageLink;
    imageElement.alt = imageName;

    var linkElement = document.createElement("a");
    linkElement.href = imageLink;
    linkElement.target = "_blank";
    linkElement.innerText = imageName;

    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(document.createElement("br"));
    imageContainer.appendChild(linkElement);
}
