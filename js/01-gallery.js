import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const galleryItems = [
  {
    preview: 'small-image1.jpg',
    original: 'large-image1.jpg',
    description: 'Image 1',
  },
  {
    preview: 'small-image2.jpg',
    original: 'large-image2.jpg',
    description: 'Image 2',
  },
  // Другие элементы галереи...
];

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;
  image.dataset.source = original;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
};

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);

galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') return;

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `);

  instance.show();
});
