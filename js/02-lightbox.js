import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
const linl = document.querySelector(".gallery__link");

function createMarcup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class ="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img class="gallery__image" src="${preview}"
                        alt="${description}"/>
            </a>
        </li>`
    )
    .join(""); //Обьединяет все эл массива в строку.
}

container.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

//   const instance = basicLightbox.create(`
//       <img src="${evt.target.dataset.source}">
//   `);
//   instance.show();}
// {
//     //small
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     // big
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },