const images = document.querySelectorAll ('.image-wrapper img');
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById ('lightbox-img')
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCredit = document.getElementById('lightbox-credit');

lightbox.style.display = 'none';

images.forEach(image => {
image.addEventListener('click', function() {
lightbox.style.display = 'flex'; 
lightboxImg.src = this.src;
lightboxCaption.textContent = this.getAttribute ('data-caption'); //Added caption and content here//
lightboxCredit.textContent = this.getAttribute ('data-credit');
});
});

lightbox.addEventListener('click', function(event) { //The original code came with a close button, but I think it would be more convenient to let audience click whereever they want to close the lightbox, so I amended the code under AI's suggestion.//
    if (event.target === lightbox) {
    lightbox.style.display = 'none'; 
    }
});