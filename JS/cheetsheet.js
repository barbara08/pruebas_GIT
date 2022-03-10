// sript anotado en la carpeta HTML/cheetsheet.html este archivo no me sale
// lo he pasado a HTML/index.html   aquí si me sale

//while cuando no tengo claro la cantidad de veces que debería ejecutarse un bloque de código, 
//for para cuando trato con algún objeto que tiene una cantidad fija



console.log("hoola");
//variables y constantes

    //las constantes se pueden modificar    "const"
    const userName = "Bárbara";
    console.log(userName);

    //las variables que si se pueden moficar con  "let"
    let age = 34;
    console.log(age);
    age = 35;
    console.log(age);

    //el demonio hecho variable   "var"
    //esta variable ademas de poderse modificar es de caracter global por lo que
    // es muy facil que acabe sobreescribiendose.

    var demon = "var";
    console.log(demon);
    demon="let";
    console.log(demon);

// TIPOS DE DATOS

    //datos simples

        //string
        // son cadenas de texto, siempre se van a reperesentar con "" o ``
        const welcome="Bienvenido a JS";
        console.log(welcome);

        //number
        // son numeros decimales o enteros y van sin comillas
        const km=340;
        console.log(km);

        //boolean
        // son lo que van a ser siempre true o false y se representan con las palabras reservadas true o false
        const isAlive= true;
        console.log(isAlive);

        //undefined
        //quiere decir que la variable no está definida. NO DEBE CONFUNDIRSE CON "NULL"
        let academy;  // lo hemos creado pero no tiene ningun valor
        console.log(academy);

        //NULL
        // esta variable si tiene valor y su valor es "ninguno"
        let address = null;
        console.log(address);

    //DATOS COMPLEJOS
        //objetos   objects
            //los objetos se crean igual que cualquier variable 
                //pero para crearlos utilizaremos las {}
            //dentro de los objetos lo que vamos a tener van a ser:
            //propiedad/valor    key/value
            //aunque esté vacía y pones console.log aperece solo las llaves
        const user={
            name: "Bárbara",   //se pone coma porque está separando las propiedades
            surname: "Martín",
            age: 34,
            address:{
                street: "Calle Larios",
                number: 5
            }
        };
        console.log(user);
        // para acceder a alguna propiedad de nuestro objeto, se hará a través de un punto "."
        console.log(user.name); 
        console.log(user.address); 

        //array  listas
        // los arrays son listas de elementos (string, number, objects, array)
        //siempre tiene que estar compuesto por el mismo elemento (ej: todo string)
        //se representa con []
        const notes = [4,6,8,3,2,7];
        console.log(notes);
        //para acceder a un elemento del array se hace con [] y dentro la posición a la que queremos referenciar
        console.log(notes[2]);
        console.log(notes[5]);

        const student = [
            {name: "Bárbara",surname: "Martín"},
            {name: "Miguel", surname: "Millán"}
        ];
        console.log(student[1].surname);

    //COMPARACIONES    ASIGNACIONES
    //asignaciones:  para asignarle un valor a una variable se utiliza un solo igual =
        
        //doble igual ==
            //lo que estamos comparando es si dos variables tienen el mismo valor, independiente de su tipo

            const a = 2;
            const b = "2";
            console.log(a==b);  //es true

        //triple igual ===
            // compara dos tipos incluyenndo su tipo, para que sea true tiene que ser extrictamente iguales
            const c = 3;
            const d = 3;
            console.log(c===d);  //es true
        

        //diferente !=
            //compara si dos variables son distintas independientemente de su tipo
            const f= "2";
            const g = 2;
            console.log(f!=g);  // esto es false
        

        //estrictamente diferente
            //compara el valor de dos variable incluyendo su tipo
            console.log(f!==g); // esto es true

        //condicionales
        //se utilian cuando queremos tener un resultado dependiendo de si se cumple o no las condiciones
            //&& significa "y" y comprueba si las condiciones se cumplen

            const isDemon = demon === "var" && isAlive === false;
            console.log(isDemon);  //es false

            // || significa "o" y lo que comprueba es que una de las condiciones se cumple
            const isGood = demon !== "var" || isAlive === true;
            console.log(isGood);  //es true

            //negación
            //se utiliza la exclamación para cambiarle el valor a un lemeento boolean
            const isDead = !isAlive;
            console.log(isDead);  // es false
/*
        // switch
        switch(Option){
            case 1:
                //code block
                break;
            case 2:
                //code block
                break;
            case 3:
                //code block
                break;
            default:
                //code block
        }

*/

        // BUCLES   while / for
    
        number = 10
        while (number > 0){
            console.log("888");
            number = number -1;
            const sueldo = Number(prompt("Introduce un número: ")); 
        }
        //empieza desde 0 hasta que el alumno llegue a 15 se va sumando uno
        for (alumno =0; alumno < 15; alumno++){
            console.log("alumno nº ", alumno);
        }













        















