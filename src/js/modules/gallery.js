export function gallery(){

//GALLERY
const openIMG = document.querySelectorAll(".gallery__img");

const galleryRow = document.querySelector('.gallery__row');
const scaleImgPopup = document.querySelector(".popup-scale-img");

galleryRow.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains("gallery__img")) {
        let popupsImg = document.querySelector(".popup-scale-img__body img");
        popupsImg.src = target.src;
        scaleImgPopup.classList.add("opened");//activate Popup
    };
});

scaleImgPopup.addEventListener("click", function () {
    document.querySelector(".popup-scale-img").classList.remove("opened");
});
}