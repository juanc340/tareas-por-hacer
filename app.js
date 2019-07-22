//const argv = require('yargs').argv;
//requeres
const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer.js');

let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);


        break;
    case 'listar':
        console.log(argv.descripcion);
        let listado = porHacer.listado();
        console.log(listado);


        for (let tarea of listado) {
            console.log('=========por hacer======='.green);
            console.log(tarea.descripcion);
            console.log('estado: '.blue, tarea.completado);
            console.log('========================'.green);




        }
        break;
    case 'actualizar':
        console.log(argv.descripcion);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(argv.descripcion);
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;


    default:
        console.log('comando no valido');

}