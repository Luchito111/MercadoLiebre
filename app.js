// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));






// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})
// Ponemos a escuchar el servidor

app.listen(3033, () => {
    console.log("Servidor corriendo en http://localhost:3033")
});