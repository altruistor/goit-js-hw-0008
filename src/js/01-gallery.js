import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'
// Change code below this line








const gallery = document.querySelector('.gallery');

const imagesMarkup = createImageMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);




function createImageMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');


}

function openImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    
  const instance = new SimpleLightbox('.gallery a', { 
    
    

     });

    instance.show();
}


gallery.addEventListener('click', openImage);