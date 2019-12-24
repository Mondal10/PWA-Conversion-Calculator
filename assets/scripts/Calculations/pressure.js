const atmosphereToBar = (val) => {
    return val * 1.01325;
}

const barToAtmosphere = (val) => {
    return val / 1.01325;
}

const atmosphereToPascal = (val) => {
    return val * 101325;
}

const pascalToAtmosphere = (val) => {
    return val / 101325;
}

const atmosphereToPFPSI = (val) => {
    return val * 14.696;
}

const PFPSItoAtmosphere = (val) => {
    return val / 14.696;
}

const atmosphereToTorr = (val) => {
    return val * 760;
}

const torrToAtmosphere = (val) => {
    return val / 760;
}

const barToPascal = (val) => {
    return val * 100000;
}

const pascalToBar = (val) => {
    return val / 100000;
}

const barToPFPSI = (val) => {
    return val * 14.504;
}

const PFPSItoBar = (val) => {
    return val / 14.504;
}

const barToTorr = (val) => {
    return val * 750;
}

const torrToBar = (val) => {
    return val / 750;
}

const pascalToPFPSI = (val) => {
    return val / 6895;
}

const PFPSItoPascal = (val) => {
    return val * 6895;
}

const pascalToTorr = (val) => {
    return val / 133;
}

const torrToPascal = (val) => {
    return val * 133;
}

const PFPSItoTor = (val) => {
    return val * 51.7149;
}

const torToPFPSI = (val) => {
    return val / 51.7149;
}

export const pressure = (data) => {
    const { fromSelect, toSelect, fromInput, toInput } = data;

    console.log(fromSelect.value, toSelect.value);

    if (fromSelect.value === 'atmosphere' && toSelect.value === 'bar') {
        toInput.value = atmosphereToBar(Number(fromInput.value));
    } else if (fromSelect.value === 'bar' && toSelect.value === 'atmosphere') {
        toInput.value = barToAtmosphere(Number(fromInput.value));
    } else if (fromSelect.value === 'atmosphere' && toSelect.value === 'pascal') {
        toInput.value = atmosphereToPascal(Number(fromInput.value));
    } else if (fromSelect.value === 'pascal' && toSelect.value === 'atmosphere') {
        toInput.value = pascalToAtmosphere(Number(fromInput.value));
    } else if (fromSelect.value === 'atmosphere' && toSelect.value === 'pound-force-per-square-inch') {
        toInput.value = atmosphereToPFPSI(Number(fromInput.value));
    } else if (fromSelect.value === 'pound-force-per-square-inch' && toSelect.value === 'atmosphere') {
        toInput.value = PFPSItoAtmosphere(Number(fromInput.value));
    } else if (fromSelect.value === 'atmosphere' && toSelect.value === 'torr') {
        toInput.value = atmosphereToTorr(Number(fromInput.value));
    } else if (fromSelect.value === 'torr' && toSelect.value === 'atmosphere') {
        toInput.value = torrToAtmosphere(Number(fromInput.value));
    } else if (fromSelect.value === 'bar' && toSelect.value === 'pascal') {
        toInput.value = barToPascal(Number(fromInput.value));
    } else if (fromSelect.value === 'pascal' && toSelect.value === 'bar') {
        toInput.value = pascalToBar(Number(fromInput.value));
    } else if (fromSelect.value === 'bar' && toSelect.value === 'pound-force-per-square-inch') {
        toInput.value = barToPFPSI(Number(fromInput.value));
    } else if (fromSelect.value === 'pound-force-per-square-inch' && toSelect.value === 'bar') {
        toInput.value = PFPSItoBar(Number(fromInput.value));
    } else if (fromSelect.value === 'bar' && toSelect.value === 'torr') {
        toInput.value = barToTorr(Number(fromInput.value));
    } else if (fromSelect.value === 'torr' && toSelect.value === 'bar') {
        toInput.value = torrToBar(Number(fromInput.value));
    } else if (fromSelect.value === 'pascal' && toSelect.value === 'pound-force-per-square-inch') {
        toInput.value = pascalToPFPSI(Number(fromInput.value));
    } else if (fromSelect.value === 'pound-force-per-square-inch' && toSelect.value === 'pascal') {
        toInput.value = PFPSItoPascal(Number(fromInput.value));
    } else if (fromSelect.value === 'pascal' && toSelect.value === 'torr') {
        toInput.value = pascalToTorr(Number(fromInput.value));
    } else if (fromSelect.value === 'torr' && toSelect.value === 'pascal') {
        toInput.value = torrToPascal(Number(fromInput.value));
    } else if (fromSelect.value === 'torr' && toSelect.value === 'pound-force-per-square-inch') {
        toInput.value = torToPFPSI(Number(fromInput.value));
    } else if (fromSelect.value === 'pound-force-per-square-inch' && toSelect.value === 'torr') {
        toInput.value = PFPSItoTor(Number(fromInput.value));
    } else {
        toInput.value = fromInput.value;
    }
}