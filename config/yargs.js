const argv = require('yargs')
    .command('crear', 'crear una nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        }

    })
    .command('actualizar', 'actuliza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'actualiza la tarea'
        }


    })
    .command('borrar', 'actuliza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'actualiza la tarea'
        }


    })
    .help()
    .argv;


module.exports = {
    argv

}