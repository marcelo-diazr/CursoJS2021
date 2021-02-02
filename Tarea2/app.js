//Ejer 1


const miObjeto = {
    mascotas : ['perros','gatos','canarios','pez','serpiente'],
    eliminarMascota : function(nombremascota){
        if(this.mascotas.includes(nombremascota) === true){
            let buscarmascota = this.mascotas.indexOf(nombremascota);
            this.mascotas.splice(buscarmascota, 1);
        }else {console.log('El animal ingresado no existe');
    }
        return this.mascotas;
    },eliminarUltimaMascota : function(){
        this.mascotas.pop();
        return this.mascotas;
    },agregarMascota : function(nombremascota){
        this.mascotas.push(nombremascota);
        return this.mascotas;
    },contadorMascotas : function(){
        var tipos=0;
        for (let i = 0; i < this.mascotas.length; i++) {
        if (this.mascotas[i].indexOf("os") !== -1){
        tipos++;
    }
    }
    return `En el arreglo hay ${tipos} mascotas que terminan con 'os'`;
}
}

//Ejer 2

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombreEmpresa: 'ACME',
        },
    clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: undefined,
    
}

const {
    nombre,
    cargo,
    empresa:{
        ubicación:{
            comuna,
            puesto,
        },
        datos:{
            nombreEmpresa,
        },
    clientes = [1,2]
    },
    gustos = [1,2,3 ],
    hijos = '(no tiene hijos)',
} = trabajador


const funcionTrabajador1 = function(){
    return `El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${gustos[0]} y ${gustos[1]} , ${gustos[2]} más, ${hijos}`;
}
const funcionTrabajador2 = function(){
    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${clientes[0]} y ${clientes[1]}`;
}