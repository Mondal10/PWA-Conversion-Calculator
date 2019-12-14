import { Utility } from '../Utils/utilityFunctions.js';
import { calculate } from './calculate.js';

const { toCapitalize } = Utility;

export const populateDropDowns = (data) => {
  // DropDown Elements
  const conversionSelect = document.querySelector('#convert');
  const fromUnitSelect = document.querySelector('#from-unit');
  const toUnitSelect = document.querySelector('#to-unit');

  // Input Elements
  const fromUnitInput = document.querySelector('#from-input-value');
  const toUnitInput = document.querySelector('#to-input-value');

  // Populate Conversion Drop-Downs
  Object.keys(data).forEach(option => {
    const conversionOption = document.createElement('option');

    conversionOption.text = toCapitalize(option);
    conversionOption.value = option;

    conversionSelect.add(conversionOption);
  });

  // Add events to Conversion Drop-Down
  const conversionChange = (evt) => {
    const { value } = evt.target;

    fromUnitInput.value = '';
    toUnitInput.value = '';

    populateMetricOption(value);
  };

  const populateMetricOption = (value) => {
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    if (value === 'none') {
      fromUnitInput.disabled = true;
      toUnitInput.disabled = true;
      return;
    }

    fromUnitInput.disabled = false;
    // toUnitInput.disabled = false;

    let allOptions = '';

    data[value].conversions.forEach(option => {

      /* 
        Because select.add(option) only worked to update a single select element at a time.
        I needed to update both the select element with the same options.
        So used string concatenation and innerHTML.
      */
      const metricOption = `
        <option value="${option}">${toCapitalize(option)}</option>
      `;

      allOptions += metricOption;
    });

    fromUnitSelect.innerHTML = allOptions;
    toUnitSelect.innerHTML = allOptions;
  };

  conversionSelect.addEventListener('change', conversionChange);
  fromUnitSelect.addEventListener('change', calculate);
  toUnitSelect.addEventListener('change', calculate);

  fromUnitInput.addEventListener('input', calculate);
  toUnitInput.addEventListener('input', calculate);
};