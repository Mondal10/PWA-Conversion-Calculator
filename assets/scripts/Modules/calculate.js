import { temperature } from '../Calculations/temperature.js';
import { length } from '../Calculations/lenght.js';
import { pressure } from '../Calculations/pressure.js';
import { frequency } from '../Calculations/frequency.js';
import { fuelEconomy } from '../Calculations/fuelEconomy.js';

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
    } else if (conversionSelect.value === 'pressure') {
        pressure(inputData);
    } else if (conversionSelect.value === 'frequency') {
        frequency(inputData);
    } else if (conversionSelect.value === 'fuel-economy') {
        fuelEconomy(inputData);
    }

    // console.log(conversionSelect.value)
};