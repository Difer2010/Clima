const axios = require('axios');
const colors = require('colors')
const clima = require('./clima');


const getLugarlatlon = async(direccion) => {

    const encodeURL = encodeURI(direccion);
    //console.log(direccion);

    const instance = axios.create({
        //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${argv.direccion}`,
        //headers: { 'x-rapidapi-key': '5be3942851mshc1bf6a1ffd34787p1148c5jsnf2b6e6a3a84e' }
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURL}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZGlmZXJtYXIyIiwiYSI6ImNrZmVrbTk3aDAxcXAzMW81dXNnMnluY3QifQ.Vwiajs0xO6LYsz6nRxnZNw' }
    })
    const resp = await instance.get();
    if (resp.data.length === 0) {

        throw new Error(`No ha ubicación para ${direccion}`)
    }
    //console.log(resp.data.features[0].center);
    const data = resp.data.features[0];
    const dir = resp.data.features[0].place_name;
    const ltd = data.center[0];
    const lng = data.center[1];

    clima.getclima(ltd, lng)
        .then(console.log)

    return `La temperatura en ` + `${dir}`.green
}

module.exports = {
    getLugarlatlon,
}