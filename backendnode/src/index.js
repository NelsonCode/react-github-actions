const express = require("express");
const app = express();
const port = 8000;
const games = require("./api");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.get("/api/games", ({res}) => {
  res.status(200).json(games);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
