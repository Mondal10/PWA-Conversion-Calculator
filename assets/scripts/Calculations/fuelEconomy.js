// litre-per-100-kilometers -> litrePer100Kilometer
// kilometer-per-litre -> kilometerPerLitre

const kilometerPerLitreTolitrePer100Kilometer = (val) => {
    return (100/val);
}

export const fuelEconomy = (data) => {
    const { fromSelect, toSelect, fromInput, toInput } = data;

    console.log(fromSelect.value, toSelect.value);

    if (fromSelect.value === 'kilometer-per-litre' && toSelect.value === 'litre-per-100-kilometers') {
        toInput.value = kilometerPerLitreTolitrePer100Kilometer(Number(fromInput.value));
    } else if (fromSelect.value === 'litre-per-100-kilometers' && toSelect.value === 'kilometer-per-litre') {
        toInput.value = kilometerPerLitreTolitrePer100Kilometer(Number(fromInput.value));
    } else {
        toInput.value = fromInput.value;
    }
}