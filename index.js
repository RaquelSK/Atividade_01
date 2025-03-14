import { soma } from "./soma.js";
import { subtrair } from "./subtrair.js";
import { dividir } from "./dividir.js";
import { multiplicar } from "./multiplicar.js";

const num1 = 8;
const num2 = 2;
const operaçao = "/";
let result;
switch (operaçao) {
    case "+":
        result = soma(num1,num2);
        break;
    case "-":
    result = subtrair (num1,num2);
    break;
    case "*":
        result = multiplicar (num1,num2);
        break;
    case "/":
        result = dividir (num1,num2);
        break;
        default:
            console.log("Operação invalida.");
            result = null;
}
if (result !== null) {
    console.log(`O resultado da operação ${num1} ${operaçao} ${num2} é: ${result}`);
}
