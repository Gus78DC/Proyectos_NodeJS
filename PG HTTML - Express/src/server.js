const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hola muchaches');
});

app.get('/usuarios', (req, res) => {
    res.send(['Xime',
            'Silvana',
            'Tomas',
             'Walter']);
});


app.get('/saludo', (req, res) => {
    res.status(200).send('<h1>Hola Mundo<h1>');})

app.get('/saludo_dirname', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));})


app.get('/autos', (req, res) => {
    res.status(200).send(
[{
    marca: 'Ford'  , 
    modelo: 'Fiesta' , 
    precio:  150000, 
    km: 200,
    color: 'Azul',
    cuotas: 12,
    anio: 2019,
    patente: 'APL123',
    vendido: false},
  {
    marca: 'Toyota'  , 
    modelo: 'Corolla' , 
    precio:  100000, 
    km: 0,
    color: 'Blanco',
    cuotas: 14,
    anio: 2019,
    patente: 'JJK116',
    vendido: false
  }]);
});




app.listen(3000,() => {  
    console.log('Servidor corriendo en el puerto 3000');
});
