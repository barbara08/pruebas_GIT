

function elementos(descripcion,cantidad,precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
}

function clientes(nombre,direccion,telefono,nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}

function facturas(clientes,elementos) {
    this.clientes = clientes;
    this.elementos = elementos;
    this.iva = 0.21;
    this.fpago = "contado";
    this.base = 0;
    this.total = function (){
        let suma = 0;
        this.base = 0;  // para limpiar la variable para que empiece a 0, porque ya tiene uan cantidad añadida
        for (let item of elementos) {
            this.base += item.cantidad*item.precio;
        }
        return this.base*(1+iva);
    }
}
let cliente1 = new clientes ();
let factura1 = new facturas (cliente1,[]);


console.log(factura1.total());

