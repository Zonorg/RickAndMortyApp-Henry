const http = require("http");
const characters = require("../utils/data");
const port = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("rickandmorty/character")) {
      let id = req.url.split("/").at(-1);
      let characterFilter = characters.find((char) => char.id === Number(id));
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(characterFilter));
    }
  })
  .listen(3001, "localhost");
 