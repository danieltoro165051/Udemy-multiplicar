const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        reject(`El parametro base: ${base} no es un numero`); // Tener en cuenta que el reject sigue ejecutando
        return;
    }
    if (!Number(limite)) {
        reject(`El parametro limite: ${limite} no es un numero`); // Tener en cuenta que el reject sigue ejecutando
        return;
    }
    console.log('================'.green);
    console.log(`Tabla del ${base}`.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }
}





let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro base ${base} no es un numero`); // Tener en cuenta que el reject sigue ejecutando
            return;
        }

        if (!Number(limite)) {
            reject(`El parametro limite ${base} no es un numero`); // Tener en cuenta que el reject sigue ejecutando
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} '*' ${i} = ${base * i}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla,
}