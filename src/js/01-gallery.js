// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryImages = galleryItems
    .map((image) => {
        const item = `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source=${image.original}"
        alt="${image.description}"
        />
        </a>
        </div>`
        return item;
    })
    .join(" ");

gallery.insertAdjacentHTML('afterbegin', galleryImages);

new SimpleLightbox('.gallery a', {captionDelay: 250});

console.log(galleryItems);
