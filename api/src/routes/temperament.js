const express = require('express');
const axios = require('axios');
const { Dog, Temperament} = require('../db');


const server = express();
server.use(express.json())
  
//primero hago el llamado a la api y guardo la data en la base de datos SIN REQUEST
    async function llamadoApi() {
        const lista = [];
            try {
                const allDogs = await axios.get('https://api.thedogapi.com/v1/breeds');
                const data = allDogs.data;
                const allTemp = data.filter((dog) => dog.temperament);
                const tempFiltered = allTemp.filter((temp) => temp.temperament !== undefined);
                tempFiltered.forEach((dog) => {
                    // por cada posicion del array separar temperamentos en elementos
                    // recorrer los elementos
                    dog.temperament.split(',').map((t) => {
                        //pushearlos al NuevoARRAY
                        lista.push(t.trim())
                    })
                })
                let deleteRepited = new Set(lista);
                let cleanList = Array.from(deleteRepited);
                //PASO A GUARDAR EN LA BASE DE DATOS//
                cleanList.map((temperament) => {
                    Temperament.findOrCreate({
                        where: {
                            name: temperament
                        }
                    })
                    .then(console.log('Temperamentos (re)imported to DB'))
                    .catch(err => console.error(err));
                })
            } catch(e) {console.log(e)}
    }
 
    //AHORA HAGO EFECTIVAMENTE EL REQUEST 
    server.get('/', async (req, res, next) => {
        try {
            await llamadoApi();
            const data = await Temperament.findAll()
            if(data.length) {
                return res.json(
                    {   length: data.length,
                        result: data
                    }
                )
            }
            res.status(200).send(data)
        } catch(e) {next(e)}
    })

module.exports = server