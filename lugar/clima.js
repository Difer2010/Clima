const axios = require('axios');
const colors = require('colors')


const getclima = async(lng, ltd) => {
    // const coord = await lugar.getLugarlatlon(dirección) --> Asi se hizo en el curso
    //console.log('ltd', ltd, 'lng', lng);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ltd}&lon=${lng}&appid=4d64596f57cff14d93523d625ba10070&units=metric`,
        //params: { 'units': 'metric' }
    })
    const resp = await instance.get();
    //console.log(instance);
    if (resp.data.length === 0) {

        throw new Error(`No hay clima para ${resp}`)
    }
    const data = resp.data.main.temp
    const temp = data.temp
    return `es de ` + `${data}° Centigrados`.green

}

module.exports = {
    getclima,
}