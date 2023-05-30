import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const addImgMark = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", addImgMark);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a>
      </li>`;
    })
    .join("");
}

gallery.onclick = (cl) => {
  cl.preventDefault();
  if (cl.target.nodeName !== "IMG") {
    return;
  }

  const openImg = basicLightbox.create(
    `<img width="800" height="600" src="${cl.target.dataset.source}">`,
    {
      closable: true,
      onShow: () => {
        document.body.addEventListener("keydown", pressEsc);
      },
      onClose: () => {
        document.body.removeEventListener("keydown", pressEsc);
      },
    }
  );

  function pressEsc(evt) {
    if (evt.key === "Escape") {
      openImg.close(evt);
    }
  }

  openImg.show();
};
