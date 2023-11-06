function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let Sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let Vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
let Kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

Sausis = calcAverage(Sausis);
Vasaris = calcAverage(Vasaris);
Kovas = calcAverage(Kovas);

let vidurkis = [Sausis, Vasaris, Kovas];
vidurkis = calcAverage(vidurkis);

console.log(`
    Vidutinė Sausio temperatūra: ${Sausis}\n
    Vidutinė Vasario temperatūra: ${Vasaris} \n
    Vidutinė Kovo temperatūra: ${Kovas}\n
    Bendras vidurkis: ${vidurkis}
`);