import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const addImgMark = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", addImgMark);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description}/>
      </a>
      </li>`;
    })
    .join("");
}

const addGallarySimpleLightBox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.9,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 500,
});
