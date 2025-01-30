const express = require ('express')
const app = express()
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT

//connexion à la base de données
const connectDB = require("./config/connectDB")
connectDB()

// Middleware
const path = require('path');
app.use(express.static(path.join(__dirname, '../')));

// Routes
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/a_propos.html'));
 });
 app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../pages/afficherDons.html'));
});
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../pages/animaux.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/contacter.html'));
 });
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/donner.html'));
 });
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/participer.html'));
 });
 

//utiliser les routes
const routeUser = require("./routes/userRoutes")
const routeDon = require("./routes/donRoutes")
const routeMsg = require("./routes/msgRoutes")

//app.use("/api", routeUser);
app.use("/api", routeDon);
//app.use("/api", routeMsg);

app.listen(port, (err)=>{
    err
        ? console.log(err)
        :console.log('the server is running on port : '+ port)
})
