const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('no se ha guardado el archivo');
        console.log('el archivo se ha guardado');
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }



}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;


}
const listado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    console.log(index);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();

        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    console.log(index);

    if (index >= 0) {
        const valor = listadoPorHacer[index];
        listadoPorHacer.splice(index);
        console.log(listado());
        guardarDB();
        return valor;
    }

}


module.exports = {
    crear,
    listado,
    actualizar,
    borrar
}