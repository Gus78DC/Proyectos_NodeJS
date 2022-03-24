/*1. Crear un archivo tareas.json que contenga un array de objetos literales.
2. Cada objeto literal deberá tener las propiedades: titulo y estado. En donde el
título podrá ser cualquier cadena de texto y el estado podrá ser: terminada, en
progreso o pendiente.
3. Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,
seguramente nos convenga usar el módulo nativo FS.
4. Mostrar el listado de tareas existente por terminal. Para esto, seguramente
tengamos que guardar el contenido del archivo tareas.json en una variable y
convertir la misma a un dato tipo array. ¿Se nos ocurre cómo?*/


let fs = require('fs');
let leerJson = fs.readFileSync('./tareas.json');
let parseado = JSON.parse(leerJson);




/* Pasar Argumentos al ejecutar en terminal */

let arg = process.argv[2]

switch (arg) {
    case 'listar':
        parseado.forEach(lista => console.log('Titulo: ' + lista.titulo 
        + ' Estado: ' + lista.estado));;
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");		
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;	
}





