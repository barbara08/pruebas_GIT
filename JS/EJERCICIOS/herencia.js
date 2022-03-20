class Vehiculo{
    matricula = "";
    numero_ruedas = "";
    estado_luces = false;

    constructor(matricula, numero_ruedas){
        this.matricula = matricula;
        this.numero_ruedas = numero_ruedas;
    }

    arrancar(){
        console.log(this.matricula, "arrancado");
    }
    parar(){
        console.log(this.matricula, "parado");
    }
    luces(flat){
        if (flat){
            console.log(this.matricula, "luces encendidas");
        }else{
            console.log(this.matricula, "luces apagadas");
        }
        this.estado_luces = flat;
    }
}
class Coche extends Vehiculo{
    constructor(matricula){
        super(matricula, 4);
    }
}

class Moto extends Vehiculo{
    constructor(matricula){
        // es obligatorio llamar a super()
        super(matricula, 2); // super => llama al constructor de la  clase de la que hereda (Vehiculo)
    }
    arrancar(){
        this.luces(true);  //llamamos a luces de la clase moto
        super.arrancar(); //llamamos a arrancar de la clase vehiculo no al de moto
    }
}

coche = new Coche("1234asd");
coche.arrancar();
console.log(coche);

moto = new Moto("plp123");
moto.arrancar();
console.log(moto);