// Import stylesheets
//import './style.css';


const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 }
];


const expensiveItems = items
  .filter(item => item.price > 199);

console.log(`Expensive Items: ${expensiveItems.map(item => item.name).join(', ')}`);


/*1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con
Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:
a. node app.js listar
i. Si se escribe la palabra listar después del nombre del archivo, se
deberán listar todas las notas existentes.

b. node app.js
i. Si NO se escribe ninguna palabra después del nombre del archivo,
en la terminal deberá aparecer el texto: Atención - Tienes que
pasar una acción.
c. node app.js cualquier texto
i. Si se llegase a pasar cualquier otro texto que no sea la palabra
listar, en la terminal deberá aparecer el texto: No entiendo qué
quieres hacer.

Nuestro tech leader es una buena persona, y para que logremos lo anterior nos
dejó la siguiente pista: piensen en el switch.*/

function listar(){

  
}