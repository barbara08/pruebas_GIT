//PAG 52, 60, 62
// FUNCIONES  son los devuelven un valor también es un objeto
// PROCEDIMIENTOS  son los que no devuelven ningún valor

console.clear();
const prompt = require("prompt-sync")();
function saludar(nombre, apellido, dia) {
    console.log("Hola,", nombre, apellido);
    if (dia === "viernes") {
    console.log("Ya es viernes, ¡buen finde!");
    } else {
    console.log("¡A seguir con la semana!");
    }
    }
    console.log(saludar);
    