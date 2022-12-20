const express = require('express')
const router = require('./router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
/* app.use(express.static('public')) */


//Configuracion del HBS
app.set('view engine','hbs')
app.set('views','./app/views')

app.use('/api/productos', router);

const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});

server.on('Error', (error) => {
    console.log(`Error en el servidor ${error}`)
});



