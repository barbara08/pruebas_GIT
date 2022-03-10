

// creación de variable, poner ; aunque no hace falta, se puede configurar para que salga solo

let userName = "Bárbara";
let age = 56;
age = 47;
let a = 4;
let b = 6;
let c = "Barbara ";
let d = "Martín";
const isAlive = true;



//para ver en la pantalla poner console.log(variable)
console.log(userName);

//te dice el tipo
console.log(typeof userName);

//tipo variable antiguo  var

/*
{
    las viales que vayan aquí no son las mismas de fuera
    salvo con   var
}
*/
{
    const age = 57;
    console.log(age);
}
console.log(age);
console.log(a + b);
console.log(c + d);
console.log(isAlive);
console.log(!isAlive);  // si ponemos ! saldrá falso


// Los dos están bien pero tienen la misma variable hay que comentar uno de los dos códigos para verlo
//let academy = 13 % 2 == 0;
//console.log(academy);
// let academy = 12 % 2 !== 0 || "Academia" == "Relevant";   si ponemos ! cambia el resultado
let academy = 12 % 2 == 0 || "Academia" == "Relevant";
console.log(academy);


// ==  es igual que el contenido de la variable es igual independientemente del tipo
// ===  es estrictamente igual
// !== estrictamente diferente
// != su contenido es difernete sin tener en cuenta el tipo 

let e = "3";
let f = 3;
console.log(e == f);
//console.log(e === f);





