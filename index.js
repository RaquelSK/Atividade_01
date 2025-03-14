import { arrayInvertido } from "./arrayInvertido.js";
const numbers = [1,2,3,4,5]
const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosInvertidos = [];
for (let i = numeros.length - 1; i >= 0; i--) {
    numerosInvertidos.push(numeros[i]);
}

console.log("Array:" , numeros);
console.log("Array invertido:", numerosInvertidos);