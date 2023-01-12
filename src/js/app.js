import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

const menuBlock = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");

menuBlock.onclick = function(event){
    event.stopPropagation();
    document.querySelector(".nav").classList.add("opened");
    document.querySelector(".menu").classList.add("opened");


    wrapper.addEventListener("click", function(){
        document.querySelector(".nav").classList.remove("opened");
        document.querySelector(".menu").classList.remove("opened");
    }, {once:true});
};

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