const express = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db');


const server = express();
server.use(express.json())

server.post('/', async (req, res, next) => {
    const {name, height_min, height_max, weight_min, weight_max, life_span, image, temperament} = req.body;
    try {
        const newDog = await Dog.create({
            name, 
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span,
            temperament,
            image,
        })
            try {
                const DBtemp = await Temperament.findAll({
                    where: {
                        name: temperament
                    }
                })
                newDog.addTemperament(DBtemp)
                return res.send(newDog)
            } catch(e) {
                next(e)
            }
    } catch (e) {next(e)}
})

module.exports = server