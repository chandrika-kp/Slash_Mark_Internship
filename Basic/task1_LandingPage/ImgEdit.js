// Login
function loginAlert(event) {
    event.preventDefault();
    alert('Please Signup/Login');
}

// script for section design
(function () {
    let Blur = document.getElementById('blur');
    let Grayscale = document.getElementById('grayscale');
    let Rotate = document.getElementById('rotate');
    let Sepia = document.getElementById('sepia');
    let uploadedImg = document.getElementById('displayPhoto');

    let Editor = function () {
        this.blur = function () {
            uploadedImg.style.filter = "blur(" + Blur.value + "px)";
        },
            this.grayscalee = function () {
                uploadedImg.style.filter = "grayscale(" + Grayscale.value + "%)";
            },
            this.rotateImg = function () {
                uploadedImg.style.transform = "rotate(" + Rotate.value + "deg)";
            },
            this.sepiaedit = function () {
                uploadedImg.style.filter = "sepia(" + Sepia.value + "%)";
            }
    };

    let blurEditor = new Editor();
    let grayscaleEditor = new Editor();
    let rotateEditor = new Editor();
    let sepiaEditor = new Editor();
    Blur.oninput = function () {
        blurEditor.blur();
    }
    Grayscale.oninput = function () {
        grayscaleEditor.grayscalee();
    }
    Rotate.oninput = function () {
        rotateEditor.rotateImg();
    }
    Sepia.oninput = function () {
        sepiaEditor.sepiaedit();
    }
}());

// Templates section
function applyImage(applyfilter, event) {
    event.preventDefault(); // Prevent the default behavior of the event
    var image = document.getElementById('reels-img');

    // Apply the specified filter
    if (applyfilter === 'invert') {
        image.style.filter = (image.style.filter === 'none') ? 'invert(100%)' : 'none';
    } else if (applyfilter === 'contrast') {
        image.style.filter = (image.style.filter === 'none') ? 'contrast(180%)' : 'none';
    } else if (applyfilter === 'saturate') {
        image.style.filter = (image.style.filter === 'none') ? 'saturate(8)' : 'none';
    } else if (applyfilter === 'opacity') {
        image.style.filter = (image.style.filter === 'none') ? 'opacity(0.5)' : 'none';
    } else if (applyfilter === 'brightness') {
        image.style.filter = (image.style.filter === 'none') ? 'brightness(250%)' : 'none';
    }
    // Add more conditions for additional filters as needed
}

// section design2 crop image
document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("image");
    let downloadButton = document.getElementById("download");
    const previewButton = document.getElementById("preview");
    const previewImage = document.getElementById("preview-image");
    const widthInput = document.getElementById("width-input");
    const heightInput = document.getElementById("height-input");
    let cropper = "";
    let fileName = "existing_image"; // You can set a default file name for the existing image

    // Initialize cropper
    cropper = new Cropper(image);

    previewButton.addEventListener("click", (e) => {
        e.preventDefault();
        downloadButton.classList.remove("hide");

        // Get the cropped canvas as a data URL
        let imgSrc = cropper.getCroppedCanvas({}).toDataURL('image/jpeg', 0.8);

        // Set preview image source
        previewImage.src = imgSrc;
        downloadButton.href = imgSrc;
        downloadButton.download = `cropped_${fileName}.jpg`;
    });

    window.onload = () => {
        downloadButton.classList.add("hide");
        previewButton.classList.remove("hide"); // Show the preview button by default
    };
});

// show section
let getImg = document.getElementById('getImg');
let imgtext = document.getElementById('imgtext');
function gallery(img, alt) {
    getImg.src = img;
    imgtext.textContent = alt
}
