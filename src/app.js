const express = require('express');
const app= express();
const path = require('path');
app.use(express.static('public'));
app.listen(3000,()=>console.log('Servidor corriendo en el Puerto #3000'));

//Rutas a creadas
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})