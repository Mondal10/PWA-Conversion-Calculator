// kilometerToMeter, meterToMillimeter
const multiplyByThousand = (val) => {
    return val * 1000;
};

// meterToKilometer, millimeterToMeter
const divideByThousand = (val) => {
    return val / 1000;
};

const meterToCentimeter = (val) => {
    return val * 100;
};

const centimeterToMeter = (val) => {
    return val / 100;
};

const meterToMicrometer = (val) => {
    return val * 1e+6;
};

const micrometerToMeter = (val) => {
    return val / 1e+6;
};

const meterToNanometer = (val) => {
    return val * 1e+9;
};

const nanometerToMeter = (val) => {
    return val / 1e+9;
};

const meterToMile = (val) => {
    return val / 1609;
};

const mileToMeter = (val) => {
    return val * 1e+9;
};

const meterToYard = (val) => {
    return val * 1.094;
};

const yardToMeter = (val) => {
    return val / 1.094;
};

const meterToFoot = (val) => {
    return val * 3.281;
};

const footToMeter = (val) => {
    return val / 3.281;
};

const meterToInch = (val) => {
    return val * 39.37;
};

const inchToMeter = (val) => {
    return val / 39.37;
};

const meterToNauticalmile = (val) => {
    return val / 1852;
};

const nauticalmileToMeter = (val) => {
    return val * 1852;
};

export const length = (data) => {
    const { fromSelect, toSelect, fromInput, toInput } = data;

    console.log(fromSelect.value, toSelect.value);

    if (fromSelect.value === 'meter' && toSelect.value === 'kilometer') {
        toInput.value = divideByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'kilometer' && toSelect.value === 'meter') {
        toInput.value = multiplyByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'centimeter') {
        toInput.value = meterToCentimeter(Number(fromInput.value));
    } else if (fromSelect.value === 'centimeter' && toSelect.value === 'meter') {
        toInput.value = centimeterToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'millimeter') {
        toInput.value = multiplyByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'millimeter' && toSelect.value === 'meter') {
        toInput.value = divideByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'micrometer') {
        toInput.value = meterToMicrometer(Number(fromInput.value));
    } else if (fromSelect.value === 'micrometer' && toSelect.value === 'meter') {
        toInput.value = micrometerToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'nanometer') {
        toInput.value = meterToNanometer(Number(fromInput.value));
    } else if (fromSelect.value === 'nanometer' && toSelect.value === 'meter') {
        toInput.value = nanometerToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'mile') {
        toInput.value = meterToMile(Number(fromInput.value));
    } else if (fromSelect.value === 'mile' && toSelect.value === 'meter') {
        toInput.value = mileToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'yard') {
        toInput.value = meterToYard(Number(fromInput.value));
    } else if (fromSelect.value === 'yard' && toSelect.value === 'meter') {
        toInput.value = yardToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'foot') {
        toInput.value = meterToFoot(Number(fromInput.value));
    } else if (fromSelect.value === 'foot' && toSelect.value === 'meter') {
        toInput.value = footToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'inch') {
        toInput.value = meterToInch(Number(fromInput.value));
    } else if (fromSelect.value === 'inch' && toSelect.value === 'meter') {
        toInput.value = inchToMeter(Number(fromInput.value));
    } else if (fromSelect.value === 'meter' && toSelect.value === 'nautical-mile') {
        toInput.value = meterToNauticalmile(Number(fromInput.value));
    } else if (fromSelect.value === 'nautical-mile' && toSelect.value === 'meter') {
        toInput.value = nauticalmileToMeter(Number(fromInput.value));
    } else {
        toInput.value = fromInput.value;
    }
};