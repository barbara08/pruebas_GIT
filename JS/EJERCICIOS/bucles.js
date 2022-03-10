/* JERRARQUÍA
1. ()
2. potencia  
3. *  /  %
4. +   - 


*/
//no pedir numero de alumnos
//meter nota hasta que sea distinto del 1 al 10
/*
console.clear();
const prompt = require("prompt-sync")();

let nota = 0;
let suma = 0;
let contador = 0;
while (nota >=0 && nota < 10){
    nota = Number(prompt(`Introduce nota del alumno: `));
        if(nota >= 0 && nota < 10){
            suma = suma + nota;
            contador++;
        }
}
console.log(`El promedio de notas para los alumnos ${contador} alumnos es: ${suma/contador} `);
*/

/*
console.clear();
const prompt = require("prompt-sync")();
let nota = 0;
let suma = 0;
let contAlumnos = 0;
while (nota >=0 && nota <=10){
    nota = Number(prompt("ingrese la nota: "));
    if (nota >=0 && nota <=10){
        suma = suma + nota;
        contAlumnos++;
    } 
}
console.log(`El promedio de notas para los ${contAlumnos} alumnos es: ${suma/contAlumnos}`);
*/

// FOR OF    (cucle con array)
/*for (const item of Array){
    console.log(item);
}*/

const miArray = [4,7,8,"pez","casa",-1];             //IMPRIME TODO EL ARRAY
for(let miElemento of miArray){ //IMPRIME TODO EL ARRAY
    if(miElemento === 8){       // IF CON CONTINUE Y CON BREAK 
    continue;
    }
    if(miElemento === "pez"){
        break;
    }
    console.log(`**elemento ${miElemento}`);
}
console.log("sigueinte bucle");
for(let i=miArray.length-1; i>0; i--){    //LEER EL ARRAY AL REVES
    console.log(`elemento ${miArray[i]}`)
}