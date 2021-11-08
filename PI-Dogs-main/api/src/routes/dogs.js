const express = require('express');
const axios = require('axios');
const { Dog, Temperament } = require('../db');


const server = express();
server.use(express.json())


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
    
    
//mostrar solo IMAGEN, NOMBRE, TEMPERAMENTO, PESO. Traigo todos los perros y su info
    server.get('/', async (req, res, next) => {
        async function getAllDogs(){
            const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds`)
            const data = dogs.data
            // console.log(data[0].name)
            const dogsFiltered = data.map((dog) => {
                weight_min =  parseInt(dog.weight.metric.split('-')[0]);
                weight_max =  parseInt(dog.weight.metric.split('-')[1]);
                height_min =  parseInt(dog.height.metric.split('-')[0]);
                height_max =  parseInt(dog.height.metric.split('-')[1]);
                return {
                    image: dog.image.url,
                    name: dog.name,
                    temperaments: dog.temperament?.split(', ').map((t) => {
                        return {
                            name: t
                        } 
                    }),
                    weight_min: !weight_min || weight_min === null? !weight_max || weight_max === null? weight_min = 0 : weight_min = weight_max - 1 : weight_min,
                    weight_max: !weight_max || weight_max === null? !weight_min || weight_min === null? weight_max = 0 : weight_max = weight_min + 1 : weight_max,
                    height_min: !height_min || height_min === null? !height_max || height_max === null? height_min = 0 : height_min = height_max - 1 : height_min,
                    height_max: !height_max || height_max === null? !height_min || height_min === null? height_max = 0 : height_max = height_min + 1 : height_max,
                    life_span: dog.life_span,
                    id: dog.id,
                }
            })
            return dogsFiltered
        }
        // trae los perros de la base de datos
        async function dogsDataBase() {
            const dogsDataBase = await Dog.findAll({
                include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            })
            return dogsDataBase
        }
        //concatena los perros de la api con los de la db
        async function concatDog() {
            const apiDogs = await getAllDogs()
            const DBdogs = await dogsDataBase()
            const concatenacion = apiDogs.concat(DBdogs)
            return concatenacion
        } 
        //traigo solo una raza 
            let total = await concatDog(); 
            const {name} = req.query;
                if(name) {
                    const filtro = total.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
                    filtro.length < 1 ? res.status(404).send('Dog not found') : res.status(200).send(filtro)
                }  else {
                    res.status(200).send(total)
                }
    })
    // traigo solo un perro y su info
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
                height: dogFiltered.height.metric,
                weight: dogFiltered.weight.metric,
                life_span: dogFiltered.life_span,
            }
            // console.log(showDog)
            res.status(200).json(showDog)
        } catch(e) {next(e)}
    })

    
module.exports = server
