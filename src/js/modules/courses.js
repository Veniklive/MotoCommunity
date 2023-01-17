export function courses(){
    const motoOptions = document.querySelectorAll(".moto-options");

motoOptions.forEach(item => {
    item.addEventListener("click", ()=>{
        motoOptions.forEach(item => item.classList.remove("selected"));
        item.classList.add("selected");
    });
});

const placeOptions = document.querySelectorAll(".place-options");

placeOptions.forEach(item => {
    item.addEventListener("click", ()=>{
        placeOptions.forEach(item => item.classList.remove("selected"));
        item.classList.add("selected");
    });
});

const optionsNumber = document.querySelectorAll(".number-options");

optionsNumber.forEach(item => {
    item.addEventListener("click", ()=>{
        optionsNumber.forEach(item => item.classList.remove("selected"));
        item.classList.add("selected");
    });
});
}