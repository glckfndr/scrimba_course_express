import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();

/*
Challenge:
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}
*/

app.get("/api/:category/:type", (req, res) => {
  console.log(req.params);
  res.json();
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
