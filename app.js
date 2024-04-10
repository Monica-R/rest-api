const { checkConnection, syncModels } = require ('./db/database.js');
const User = require ('./api/models/user.model.js');
const express = require('express');
const morgan = require('morgan');
const PORT = 3000;

async function checkAndSync() {
    await checkConnection();
    await syncModels();
}

// Iniciar el servidor y escuchar el puerto

async function initializeAndListen() {
    const app = express()
        .use(morgan('dev'))
        .use(express.json())
        .use("/api", require("./api/routes/index.js"))
        .listen(PORT, () => {
            console.info(`> Listening on port: ${PORT}`);
        });
    /**
     * Es lo mismo de esta forma:
     * app.use(morgan('dev'))
     * app.use(express.json())
     */
}

// Esto no es más que una función para llamar a las dos anteriores, y como son asíncronas, 
// esta función también podemos hacerla asíncrona
// en principio el de inicializar no haría falta, pero no pasa nada por ponerlo.
async function startAPI() {
    await checkAndSync();
    await initializeAndListen();
}

startAPI();