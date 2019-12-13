const KELVIN = 273.15;

const celsiusToFahrenheit = (val) => {
    return ((val * 9/5) + 32);
}

const celsiusToKelvin = (val) => {
    return val + KELVIN;
}

const fahrenheitToCelsius = (val) => {
    return ((val - 32) * 5/9);
}

const fahrenheitToKelvin = (val) => {
    return ((val - 32) * 5/9 + 273.15);
}

const kelvinToCelsius = (val) => {
    return val - KELVIN;
}

const kelvinToFahrenheit = (val) => {
    return (val - KELVIN) * 9/5 + 32;
}

export const temperature = (data) => {
    const { fromSelect, toSelect, fromInput, toInput } = data;

    console.log(fromSelect.value, toSelect.value);

    if (fromSelect.value === 'celsius' && toSelect.value === 'kelvin') {
        toInput.value = celsiusToKelvin(Number(fromInput.value));
    } else if (fromSelect.value === 'celsius' && toSelect.value === 'fahrenheit') {
        toInput.value = celsiusToFahrenheit(Number(fromInput.value));
    } else if (fromSelect.value === 'fahrenheit' && toSelect.value === 'celsius') {
        toInput.value = fahrenheitToCelsius(Number(fromInput.value));
    } else if (fromSelect.value === 'fahrenheit' && toSelect.value === 'kelvin') {
        toInput.value = fahrenheitToKelvin(Number(fromInput.value));
    } else if (fromSelect.value === 'kelvin' && toSelect.value === 'celsius') {
        toInput.value = kelvinToCelsius(Number(fromInput.value));
    } else if (fromSelect.value === 'kelvin' && toSelect.value === 'fahrenheit') {
        toInput.value = kelvinToFahrenheit(Number(fromInput.value));
    } else {
        toInput.value = fromInput.value;
    }
}