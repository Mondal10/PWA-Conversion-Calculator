import { Utility } from '../Utils/utilityFunctions.js';

const { toCapitalize } = Utility;

export const populateDropDowns = (data) => {
  // DropDowns
  const conversionSelect = document.querySelector('#convert');
  const fromUnitSelect = document.querySelector('#from-unit');
  const toUnitSelect = document.querySelector('#to-unit');

  // Inputs
  const fromUnitInput = document.querySelector('#from-input-value');
  const toUnitInput = document.querySelector('#to-input-value');

// For inputs and sub-select fields call the same change calculating function

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
    toUnitInput.disabled = false;

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
  fromUnitSelect.addEventListener('change', (evt)=>{console.log(evt.target.value)});
  toUnitSelect.addEventListener('change', (evt)=>{console.log(evt.target.value)});

  fromUnitInput.addEventListener('input', (evt)=>{console.log(evt.target.value)});
  toUnitInput.addEventListener('input', (evt)=>{console.log(evt.target.value)});
};