const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const database = require('./conf');



app.use(express.urlencoded({ extended: false }));

// Middleware para no tener problemas con los CORS cuando hagamos peticiones a nuestra API en Heroku
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//RUTA JSON DE PAJITA
app.get('/', (req, res) => {
  database.query('SELECT * FROM places', (error, results) => {
    if (error) {
      console.log(error)
      res.status(404).send(error)
    } else {
      console.log(results)
      res.status(200).send(results)
    }
  })
})




//ABRIMOS PUERTO
app.listen(PORT, () => {
  console.log(`Conectado servidor en puerto ${PORT}`)
})

