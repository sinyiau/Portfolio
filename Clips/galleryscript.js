const images = document.querySelectorAll ('.image-wrapper img');
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById ('lightbox-img')
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCredit = document.getElementById('lightbox-credit');

const closeBtn= document.querySelector ('.close');

images.forEach(image => {
image.addEventListener('click', function() {
lightbox.style.display = 'flex'; 
lightboxImg.src = this.src;
lightboxCaption.textContent = this.getAttribute ('data-caption');
lightboxCredit.textContent = this.getAttribute ('data-credit');
});
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
    lightbox.style.display = 'none'; 
    }
});