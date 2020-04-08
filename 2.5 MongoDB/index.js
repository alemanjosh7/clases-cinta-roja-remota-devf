const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //VARIABLES DE ENTORNO
require('./database/index.js');

// Middlewares: Funciones que se ejecutan previo a que se haga una conexion con un endpoint
app.use(express.json()); // Habilita el req.body
app.use(express.urlencoded({extended: true}));

// Endpoint
app.get('/', (req, res) => res.json('Bienvenido!'));

//CRUD Peliculas
app.post('/api/v1/movies', (req, res) => {
    const { body } = req;
    //Crear un registro de "Pelicula" a partir del body
    //Recibir la respuesta de  la creacion, con el ID asignado a la pelicula
    //Responder al cliente con la respuesta de la base de datos
    const newMovie = "";
    res.status(201).json(newMovie);
})

//Encender el servidor
app.listen(PORT, () => console.log(`Servidor en el puerto: ${PORT}`))