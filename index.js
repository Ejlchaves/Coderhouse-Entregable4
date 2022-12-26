const express = require('express')
const router = require('./router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


//Configuracion del HBS
app.set('view engine','ejs')
app.set('views','./app/views/ejs/pages')

app.use('/api', router);

const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});

server.on('Error', (error) => {
    console.log(`Error en el servidor ${error}`)
});



