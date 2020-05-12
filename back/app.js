const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
require('dotenv').config();
const database = require('./conf');



app.use(express.urlencoded({extended: false}));

//RUTA JSON DE PAJITA
app.get('/', (req, res)=>{
  database.query('SELECT * FROM cocktails', (error, results)=>{
    if(error){
      console.log(error)
      res.status(404).send(error)
    }else{
      console.log(results)
      res.status(200).send(results)
    }
  })
})

//ABRIMOS PUERTO
app.listen(PORT, ()=>{
  console.log(`Conectado servidor en puerto ${PORT}`)
})

