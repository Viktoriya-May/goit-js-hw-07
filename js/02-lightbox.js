import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const paletteContainer = document.querySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, description, original }) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
    .join('');

    paletteContainer.insertAdjacentHTML('beforeend', galleryEl)

    new SimpleLightbox(".gallery a", {
        overlayOpacity: 0.5,
        captionDelay: 250,
        captionsData: "alt",
        fadeSpeed: 250,
        rtl: true,
      });