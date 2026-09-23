const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const errorHandler = require("./middlewares/errorHandler");


const app = express();


// Middleware para leer JSON
app.use(express.json());


// CORS
app.use(cors());


// Rutas
app.use("/api/users", userRoutes);


// Manejo de errores
app.use(errorHandler);


module.exports = app;