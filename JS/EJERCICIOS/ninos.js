
array_ingredientes = ["huevo", "aceite"];

array_utensilios = [];

array_utensilios.push("sarten");
array_utensilios.push("espumadera");
array_utensilios.push("vitro");
array_utensilios.push("plato");
array_ingredientes.push("sal");
array_utensilios.push("tenedor");
array_utensilios.push("cuchillo");

console.log(array_ingredientes);
console.log(array_utensilios);

class supermercado{
    constructor(nombre){
    this.nombre = nombre;
    this.producto = [];
    }
    add(producto){
        this.producto.push(producto);

    }
    show_price(){
        let product ;
        let total_price = 0.0 ;
        for(product of this.producto){
            total_price += parseFloat(product.precio) * parseFloat(product.cantidad);
        }
        return total_price;
    }
    print(){
        let product ;
        console.log(this.nombre);
        console.log("----------------------------------------------------");
        for(product of this.producto){
            console.log(product.nombre, product.precio, product.cantidad, product.cantidad*product.precio);
        }
        console.log("----------------------------------------------------");
        console.log(this.show_price());
        console.log ("====================================");
    }
}

class producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let mercadona = new supermercado("Mercadona");
let lidl = new supermercado("Lidl");
console.log(lidl, mercadona);

lidl.add(new producto("nocilla duo", 2, 10));
let queso = new producto("queso negro", 6.99, 7);
lidl.add(queso);

console.log(lidl);
console.log(lidl.show_price());

mercadona.print();
lidl.print();
