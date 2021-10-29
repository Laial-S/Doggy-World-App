const express = require('express');
const axios = require('axios');
const { Dog, Temperamento } = require('../db');


const server = express();
server.use(express.json())

server.post('/', async (req, res, next) => {
    const {name, height_min, height_max, weight_min, weight_max, life_span, image} = req.body;
    try {
        const newDog = await Dog.create({
            name, 
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span,
            image
        })
        console.log(newDog)
        res.json(newDog)
    } catch (e) {next(e)}
})

module.exports = server