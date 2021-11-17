const { Router } = require('express');
const dogs = require('./dogs')
const temperament = require('./temperament')
const postDog = require('./postDog')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs)
router.use('/temperament', temperament)
router.use('/dog', postDog)

module.exports = router;
