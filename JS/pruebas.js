

console.clear();
const prompt = require("prompt-sync")();
/*
number = 10
while (number > 0){
    console.log("888");
    number = number -1;
    const sueldo = Number(prompt("Introduce un número: ")); 
}
*/
// el numero 15 se deveria guardar en una const por si después tienes que cambiar el valor del numero
for (alumno =0; alumno < 15; alumno++){
    console.log("alumno nº ", alumno);
}

//los blucles anidados se suele utilizar 
for(contador1 = 0; contador1 < 3; contador1++){
    console.log("interación", contador1, "del bucle externo");
    for(contador2 = 0; contador2 < 3; contador2++){
        console.log("interación", contador2, "del bucle interno");
    }
}

    //ARRAYS    
    identificadorArray = [1,2,3,4];
    console.log(identificadorArray[2]);
    console.log(identificadorArray);

    // ORDENAR ARRAYS   PAG 27


    //imprimir todos los valores del array hará falta una función

