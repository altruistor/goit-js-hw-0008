import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createImageMarkup = galleryItems.map(({preview, original, description}) => {
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




gallery.insertAdjacentHTML('beforeend', createImageMarkup);


    
    
  const instance = new SimpleLightbox('.gallery a', { 
    captionPosition: "bottom",
    captionData: "alt",
    captionDelay: 250,
     });



