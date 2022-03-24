/*
Esta función recibe un número X por parámetro y cuenta la cantidad de números impares 
que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 

Para resolver la ejercitación debemos utilizar el for .

Ejemplo:

console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3.

Los valores 0, 2 y 4 no los contabiliza por ser números pares.
*/


function noParesDeContarImparesHasta(numero){
    var numImpares = [];
    var acum = 0;
    for(let vuelta = 0; vuelta <= numero; vuelta++){
        if(vuelta%2 != 0){
            acum = acum + 1;
            numImpares.push(vuelta);
        }
    }
    return numImpares;
}


console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3.
