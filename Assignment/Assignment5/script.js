// Image array with URLs
const images = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    "https://cdn.pixabay.com/photo/2020/07/05/14/02/nature-5373108_960_720.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOlVpEDieXSt0Kz_FNtNpssiQZWRPbpIwYQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0q19mTrd9X7ecBMuMt-nKuMXnr7M1AL520A&s",
    "https://miro.medium.com/v2/resize:fit:640/1*2G8tZ2grE33gUhcnJOANZw.jpeg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

// Function to update the image
function updateImage() {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1;
    }, 300);
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Load the first image initially
window.onload = () => {
    sliderImage.src = images[currentIndex];
};
