//tengo que hacer dos funciones que traigan info
//funcion que trae info de la api
//funcion que trae info de la base de datos

const express = require("express");
const axios = require("axios");
const { Dog, Temperamento } = require("..db/");

const server = express();
server.use(express.json())