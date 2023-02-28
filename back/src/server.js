const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 3001;
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");

server.use(express.json()); // para que funcinoe mi sv con formato JSON
server.use(cors()); // habilito a todos a hacer solicitudes a mi servidor
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
