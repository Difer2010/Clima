const lugar = require('./lugar/lugar')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion del sitio que quiere el clima',
        demand: true

    }
}).argv;

//console.log(argv.direccion);
lugar.getLugarlatlon(argv.direccion)
    .then(console.log)
    //clima.getclima(ltd, lng)
    //   .then(console.log)