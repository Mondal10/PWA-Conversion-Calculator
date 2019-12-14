import { temperature } from '../Calculations/temperature.js';
import { length } from '../Calculations/lenght.js';

export const calculate = (evt) => {
    // DropDown Elements
    const conversionSelect = document.querySelector('#convert');
    const fromUnitSelect = document.querySelector('#from-unit');
    const toUnitSelect = document.querySelector('#to-unit');

    // Input Elements
    const fromUnitInput = document.querySelector('#from-input-value');
    const toUnitInput = document.querySelector('#to-input-value');

    const inputData = {
        fromSelect: fromUnitSelect,
        toSelect: toUnitSelect,
        fromInput: fromUnitInput,
        toInput: toUnitInput
    };

    if (conversionSelect.value === 'length') {
        length(inputData);
    } else if (conversionSelect.value === 'weight') {
        console.log('::::::::::');
    } else if (conversionSelect.value === 'temperature') {
        temperature(inputData);
    }

    // console.log(conversionSelect.value)
};