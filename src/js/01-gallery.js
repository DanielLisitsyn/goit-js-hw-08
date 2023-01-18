// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

let markup = '';

const divElem = document.querySelector('.gallery');

galleryItems.forEach(element => {
    markup += `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" 
  src=${element.preview} 
  alt=${element.description} />
</a>`   
});

divElem.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
