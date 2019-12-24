// kilohertzToHertz megahertzToKilohertz gigahertzToMegahertz
const multiplyByThousand = (val) => {
    return val * 1000;
};

// hertzToKilohertz kilohertzToMegahertz megahertzToGigahertz
const divideByThousand = (val) => {
    return val / 1000;
};

// megahertzToHertz gigahertzTokilohertz
const multilplyByMillion = (val) => {
    return val * 1e+6;
}

// hertzToMegahertz kilohertzToGigahertz
const divideByMillion = (val) => {
    return val / 1e+6;
};

const hertzToGigahertz = (val) => {
    return val / 1e+9;
}

const gigahertzToHertz = (val) => {
    return val * 1e+9;
}

export const frequency = (data) => {
    const { fromSelect, toSelect, fromInput, toInput } = data;

    console.log(fromSelect.value, toSelect.value);

    if (fromSelect.value === 'hertz' && toSelect.value === 'kilohertz') {
        toInput.value = divideByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'kilohertz' && toSelect.value === 'hertz') {
        toInput.value = multiplyByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'hertz' && toSelect.value === 'megahertz') {
        toInput.value = divideByMillion(Number(fromInput.value));
    } else if (fromSelect.value === 'megahertz' && toSelect.value === 'hertz') {
        toInput.value = multilplyByMillion(Number(fromInput.value));
    } else if (fromSelect.value === 'hertz' && toSelect.value === 'gigahertz') {
        toInput.value = hertzToGigahertz(Number(fromInput.value));
    } else if (fromSelect.value === 'gigahertz' && toSelect.value === 'hertz') {
        toInput.value = gigahertzToHertz(Number(fromInput.value));
    } else if (fromSelect.value === 'kilohertz' && toSelect.value === 'megahertz') {
        toInput.value = divideByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'megahertz' && toSelect.value === 'kilohertz') {
        toInput.value = multiplyByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'kilohertz' && toSelect.value === 'gigahertz') {
        toInput.value = divideByMillion(Number(fromInput.value));
    } else if (fromSelect.value === 'gigahertz' && toSelect.value === 'kilohertz') {
        toInput.value = multilplyByMillion(Number(fromInput.value));
    } else if (fromSelect.value === 'megahertz' && toSelect.value === 'gigahertz') {
        toInput.value = divideByThousand(Number(fromInput.value));
    } else if (fromSelect.value === 'gigahertz' && toSelect.value === 'megahertz') {
        toInput.value = multiplyByThousand(Number(fromInput.value));
    } else {
        toInput.value = fromInput.value;
    }
}