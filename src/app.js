const express = require('express');
const app= express();
const path = require('path');
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Servidor corriendo en el Puerto $|port|`))

// app.listen(3000,()=>console.log('Servidor corriendo en el Puerto #3000'));

//Rutas a creadas
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});
app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});
app.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
