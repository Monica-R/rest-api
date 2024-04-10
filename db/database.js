const { Sequelize } = require('sequelize');

// Creamos nuestra conexión
const connection = new Sequelize('restapidb','paco','rebootstudent', {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false
}); 

async function checkConnection() {
    try {
        await connection.authenticate();
        console.info('funciona.')
    } catch(error) {
        console.error('Houston, tenemos un problema', error);
    }
}

// syncModels es para sincronizar cualquier cambio referente a, cosas como:
// crear una tabla, añadir campo, borrar, actualizar...etc.

async function syncModels() {
    try {
        await connection.sync();
        console.info(' ');
    } catch (error) {
        console.error("Houston, tenemos un problema", error);
    }
}

module.exports = {
    checkConnection,
    syncModels
};