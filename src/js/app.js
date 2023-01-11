import { linefeed } from "gulp-util";
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

/*openIMG.forEach(img => {
    img.addEventListener("click", function(event){
        event.stopPropagation();
        document.querySelector(".popup-scale-img").classList.add("opened");
        let target = event.target;
        if (target.classList.contains("gallery__img")) {
            console.log(target.src);
            let popapsImg = document.querySelector(".popup-scale-img__body img")
        }
    
        wrapper.addEventListener("click", function(){
            document.querySelector(".popup-scale-img").classList.remove("opened");
        }, {once:true})});
});*/