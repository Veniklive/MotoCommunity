export function price() {
    const summaryPrice = document.querySelector('.courses__sum');
    const priceMoto = document.querySelectorAll('.motoPrice');
    const pricePlace = document.querySelectorAll('.placePrice');
    const priceNumber = document.querySelectorAll('.numberPrice');
    updatePrice();

    for (const input of priceMoto) {
        input.addEventListener('click', updatePrice)
    }
    for (const input of pricePlace) {
        input.addEventListener('click', updatePrice)
    }
    for (const input of priceNumber) {
        input.addEventListener('click', updatePrice)
    }

    function updatePrice(){
        let valueMoto=0;
        let valuePlace=0;
        let valueNumber=0;
        for (const input of priceMoto) {
            if(input.closest('.moto-options').classList.contains('selected'))
                valueMoto+=parseInt(input.getAttribute('price'));
        }
        for (const input of pricePlace) {
            if(input.closest('.place-options').classList.contains('selected'))
                valuePlace+=parseInt(input.getAttribute('price'));
        }
        for (const input of priceNumber) {
            if(input.closest('.number-options').classList.contains('selected'))
                valueNumber+=parseInt(input.getAttribute('price'));
        }
        summaryPrice.textContent=((valueNumber*valueMoto)+(valueNumber*valueNumber)) + " Грн.";
    }
};