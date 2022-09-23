// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Change code below this line
const galleryEl = document.querySelector('div.gallery');

galleryEl.addEventListener('click', onClickShowModal);

function onClickShowModal(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }
  galleryEl.removeEventListener('click', onClickShowModal);
  gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250;
  });
}

function renderGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a>`;
    })
    .join('');
}

function makeGallery(arr) {
  return galleryEl.insertAdjacentHTML('afterbegin', renderGallery(arr));
}

makeGallery(galleryItems);

const gallery = new SimpleLightbox('div.gallery a');
