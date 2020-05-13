const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const database = require('./conf');
const bcrypt = require('bcrypt');


app.use(express.json());
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
app.get('/places', (req, res) => {
  database.query('SELECT * FROM places', (error, results) => {
    if (error) {
      console.log(error);
      res.status(404).send(error);
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  })
})

//Ruta buscar usuarios por :id
app.get('/usuarios/:id', (req, res)=>{
  database.query('SELECT * FROM users', (error, results)=>{
    if(error){
      console.log(error)
      res.status(404).send(error)
    }else{
      console.log(results)
      res.status(200).send(results)
    }
  })
})




//Ruta Register darse de alta
app.post('/register', async (req, res) => {
  let errors = [];

  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const profile_image = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

  //-----Errores----

  //---1.Sin campos vacíos---//
  if (!email || !name || !password || !confirmPassword) {
    errors.push({ msg: "Faltan campos por rellenar" })
  }

  //---2.Contraseña corta
  if (password.length < 6) {
    errors.push({ msg: "La contraseña tiene que tener al menos 6 caracteres" })
  }

  //---3.Contraseñas iguales??
  if (password !== confirmPassword) {
    errors.push({ msg: "Las contraseñas no coinciden" })
  }

  //---4.Comprobar que el email tenga "@"
  if (!email.includes("@")) {
    errors.push({ msg: "Email incorrecto" })
  }

  if (errors.length > 0) {
    res.send(errors)
  } else {
    const hashedPassword = await bcrypt.hash(password, 5)
    const validatedBody = {
      name: name,
      password: hashedPassword,
      email: email,
      profile_image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    }

    database.query('INSERT INTO users SET ?', validatedBody, (error, results) => {
      !error
        ? res.send('Usuario/a creado con éxito')
        : res.send(error)
    })
  }
})

//Ruta para login
app.post('/login', (req, res) => {
  database.query('SELECT * FROM users', async (error, results) => {
    //Localizamos al user que quiere iniciar sesión
    if (error) {
      console.log('Error al hacer la consulta');
      res.send(error);
    } else {
      const thisUser = results.find((user) => {
        return user.email === req.body.email
      });

      if (thisUser == null) {
        res.send('Este usuario no existe');
      } else {
        if (await bcrypt.compare(req.body.password, thisUser.password)) {
          res.send('La constraseña coincide. Sesión iniciada')
        } else {
          res.send('La constraseña o el usuario no coincide')
        }
      }
    }
  })
})

//Ruta para apuntarse a lista de espera
app.post('/:id_places/waitinglist/:id_user', (req, res) => {

  const bodyDatos= {
    id_places : req.params.id_places,
    id_user : req.params.id_user
  }
 
  database.query('INSERT INTO lista_espera SET ?', bodyDatos, (error, results)=>{
    if(error){
      console.log(error)
      res.send(error)
    }else{
      console.log(results)
      res.send(results)
    }
  } )
  // database.query('SELECT id_user FROM lista_espera WHERE id_places=?', [id_user, id_places], (error, results) => {
  //   error
  //     ? res.send(error)
  //     : res.send(results)
  //   const a = results[0].id_places
  //   console.log(a)
  // })


})



//ABRIMOS PUERTO
app.listen(PORT, () => {
  console.log(`Conectado servidor en puerto ${PORT}`)
})

