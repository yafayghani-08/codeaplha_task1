let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(img) {
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  currentIndex = Array.from(images).findIndex(i => i.src === img.src);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

