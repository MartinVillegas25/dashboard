
const mongoose = require('mongoose');

const dbConnection = async()=>{

    try {

        //coneccion a mongo
        await mongoose.connect(process.env.DATA_URL);

        console.log('se conecto bien')

    } catch (error) {
        console.error(error);
        throw new Error('Error al levantar base de datos')
    }


}

module.exports = {
    dbConnection
}