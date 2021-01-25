
//Saber si el número es por o impar
function tipodeNumero(numero){
if (numero%2==0) {
    return 'El numero' + ' ' + numero + ' ' + 'es par';
} else {
    return 'El numero' + ' ' + numero + ' ' + 'es impar';
}
}

// Saber en que posición se encuentra el caracte o letra

function posicionLetra(letracaracter){
    var buscar = "abcdefghijklmnñopqrstuvwxyz";
    var res = buscar.indexOf(letracaracter);
    return res;
}

//Precio con el 19%
function precioconImpuesto(precio){
    var masimpuesto = precio * 0.19
    var resconimpuesto = masimpuesto + precio;
    const formatterPeso = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      });
    return 'El precio con impuesto es de ' + formatterPeso.format(resconimpuesto); 

}

//Hacer un closure

function dado(nombreTirador){
    var numero = Math.floor(Math.random() * 6) + 1
    return nombreTirador + 'tiró un dado y salió' + ' ' + numero;
  }


//Generar un pototipo

function Persona(nombrecompleto, edad){
    this.nombrecompleto = nombrecompleto;
    this.edad = edad;
}
Persona.prototype.obtenerNombreEdad = function(){
    return this.nombrecompleto + ' ' + this.edad;
}
var persona1 = new Persona('MarceloDiaz', 30);

Persona.prototype.guardarEnLocalStorage = function(){
    localStorage.setItem('nombre',this.nombrecompleto);
    localStorage.setItem('edad',this.edad);
    return true;
}

Persona.prototype.guardarEnSessionStorage = function(){
    sessionStorage.setItem('nombre',this.nombrecompleto);
    sessionStorage.setItem('edad',this.edad);
    return true;
}




