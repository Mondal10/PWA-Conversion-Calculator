export const calculate = (evt) => {
    // DropDown Elements
    const conversionSelect = document.querySelector('#convert');
    const fromUnitSelect = document.querySelector('#from-unit');
    const toUnitSelect = document.querySelector('#to-unit');

    // Input Elements
    const fromUnitInput = document.querySelector('#from-input-value');
    const toUnitInput = document.querySelector('#to-input-value');

    

    console.log(evt);
    console.log(evt.target.value)
};