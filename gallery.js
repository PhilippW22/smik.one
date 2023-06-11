// GALLERY POPUP SLIDER

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.getElementById('close-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
});

zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        if (window.innerWidth > 1000) {
            imageView.style.display = "block";
            imageBox.style.display = "block";
            currentImageIdx = index + 1;
            currentImageDisplay(currentImageIdx);
        }
    });
});

function currentImageDisplay(position){
    const page = window.location.pathname.split("/").pop().split(".")[0];
    let imagePath = '';

    if (page === 'graffiti') {
        imagePath = 'images/graffiti/';
    } else if (page === 'signs') {
        imagePath = 'images/signs/';
    } else if (page === 'sketches') {
        imagePath = 'images/sketches/';
    } else {
        imagePath = 'images/murals/';
    }

    imageBox.style.background = `url(${imagePath}img${currentImageIdx}.webp) center/contain no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    const page = window.location.pathname.split("/").pop().split(".")[0];
    const imageCount = getImageCount(page);
    if(currentImageIdx === imageCount + 1){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
});

closeBtn.addEventListener('click', function() {
    imageView.click();
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        prevBtn.click();
    }
    if (event.code === 'ArrowRight') {
        nextBtn.click();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        imageView.style.display = "none";
        imageBox.style.display = "none";
    }
});

function getImageCount(page) {
    if (page === 'graffiti') {
        return 20;
    } else if (page === 'murals') {
        return 14;
    } else if (page === 'signs') {
        return 17;
    } else if (page === 'sketches') {
        return 15;
    } else {
        return 0;
    }
}
