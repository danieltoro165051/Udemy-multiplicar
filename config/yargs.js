const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}


const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar en consola', opts)
    .command('crear', 'Crea un archivo plano con la tabla de multiplicar', opts)
    .argv


module.exports = {
    argv
}