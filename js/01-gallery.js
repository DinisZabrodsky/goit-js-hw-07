import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


gallery.insertAdjacentHTML("beforeend", createGalery(galleryItems));
gallery.addEventListener('click', openImage);


function createGalery(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" rel="noopener noreferrer">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join("");

}



function openImage(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="855">`);

    instance.show();

    window.addEventListener('keydown', closeImage);

    // Розумію, що костиль, але "const instance" оголошена в середині функції і за її межами не існує. Нажаль, на даному етапі, я не розумію, як зробити щоб до неї можна було добратись із функції яка буде оголошена за межами даної

    function closeImage(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close()
            window.removeEventListener('keydown', closeImage);
        }
    };

};