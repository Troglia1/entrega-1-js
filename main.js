
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}

function numeroMayor(a, b) {
    if (a > b) {
        console.log(a + " es mayor que " + b + ".");
    } else if (b > a) {
        console.log(b + " es mayor que " + a + ".");
    } else {
        console.log(a + " y " + b + " son iguales.");
    }
}


function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5.");
    } else {
        console.log(numero + " no es múltiplo de 5.");
    }
}


function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}


function imprimirPalabraNVeces(palabra, veces) {
    for (let i = 0; i < veces; i++) {
        console.log(palabra);
    }
}


function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];

const saltearEl5 = (array) => {
    for (let i = 0; i < array.length; i++) {
       if (i === 4) { //saltea el numero 5
        continue
       }
        console.log(array[i])
    }
 }

function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

esParOImpar(5);
numeroMayor(10, 5);
esMultiploDe5(15);
imprimirNumerosHasta(7);
imprimirPalabraNVeces("Hola", 3);
imprimirArray([1, 2, 3, 4]);
saltearEl5(arrayDeNumeros);
multiplicarArrayPorNumero([2, 4, 6], 3);





