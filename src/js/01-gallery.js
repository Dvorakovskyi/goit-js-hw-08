// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryImg = galleryItems.map(({ preview, original, description, }) =>     
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
galleryEl.insertAdjacentHTML('afterbegin', galleryImg);

new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
})
