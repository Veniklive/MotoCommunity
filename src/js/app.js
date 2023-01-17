import * as flsFunctions from "./modules/functions.js";
import { gallery } from "./modules/gallery.js";
import { courses } from "./modules/courses.js";
import { number } from "./modules/number.js";
flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/


//MAIN
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

//GALLERY
if (document.querySelector(".gallery")) {
    gallery();
};

//RADIO
if (document.querySelector(".courses")) {
    courses();
};

//NUMBER
if (document.querySelector(".courses")) {
    number();
};