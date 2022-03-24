
/*Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...

Creemos cuatro funciones que realicen las operaciones principales de una calculadora.

Nuestro trabajo será definir la función suma, resta, multiplicacion y division. 
Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda.
Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros,
y así sucesivamente.

Ahora sí, con esas funciones ya definidas, creemos la función calculadora. 
Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback. */

function suma(num1,num2){
    return num1 + num2;
} 

function resta(num1,num2){
    return num1 - num2;
} 

function multiplicacion(num1,num2){
    return num1 * num2;
} 

function division(num1,num2){
    return num1 / num2;
} 

function calculadora(num1, num2, callBack){
    return callBack(num1,num2);
}

console.log(calculadora(2,4,suma));
console.log(calculadora(4,2,resta));
console.log(calculadora(2,4,multiplicacion));
console.log(calculadora(4,2,division));




