/* Requireds */
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`El archivo ${archivo} fue creado satisfactoriamente`))
            .catch((e) => console.log(e));
    default:
        break;
}

/*console.log('Base', argv.base);
console.log('Limite', argv.limite);*/