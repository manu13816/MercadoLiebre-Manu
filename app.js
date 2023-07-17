const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'));
})

app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchado en el Puerto" + process.env.PORT);
}) 

