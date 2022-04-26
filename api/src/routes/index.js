const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//Traigo Axios
const axios = require("axios");
//Traigo Router
const router = Router();
//Traigo Tablas de la db
const { Pokemon, Type, PokemonType } = require("../db");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
