const express = require('express');
const axios = require('axios');
const {DB_APIKEY} = process.env;
const { Dog, Temperamento } = require('../db');


const server = express();
server.use(express.json())

module.exports = server
//tengo que hacer dos funciones que traigan info
//funcion que trae info de la api
    // async function getApiInfo() {
    //     try {
    //        const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    //        const data = dogs.data
    //        return data
    //     } catch (error) {
    //         console.log('SOY ERROR' + error)
    //     }   
    // }
    
    
//mostrar solo IMAGEN, NOMBRE, TEMPERAMENTO, PESO
    server.get('/', async (req, res, next) => {
        const {name} = req.query;
        try {
            if(!name) {
                const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds`)
                const data = dogs.data
                // console.log(data[0].name)
                const dogsFiltered = data.map((dog) => {
                    return {
                    image: dog.image,
                    name: dog.name,
                    temperament: dog.temperament,
                    weight: dog.weight.metric
                    }
                }) 
                res.status(200).json(dogsFiltered)   
            } else {
                const raza = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
                const data = raza.data 
                if(data.length < 1) {
                    res.status(404).send('Dog not found')
                } else {
                    res.status(200).send(data)
                } 
            }
        } catch(e) {next(e)}
    })

    server.get('/:id', async (req, res, next) => {
        const {id} = req.params;
        console.log(parseInt(id))
        try {
            const getDetail = await axios.get(`https://api.thedogapi.com/v1/breeds`)
            const data = getDetail.data
            // console.log(data)
            const dogFiltered = data.find(dog => {return dog.id === parseInt(id)});
            // console.log(dogFiltered)
            const showDog = {
                image: dogFiltered.image.url,
                name: dogFiltered.name,
                temperament: dogFiltered.temperament,
                height: dogFiltered.height,
                weight: dogFiltered.weight.metric,
                life_span: dogFiltered.life_span  
            }
            // console.log(showDog)
            res.status(200).json(showDog)
        } catch(e) {next(e)}
    })

    

