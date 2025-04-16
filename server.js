import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;
  /*
Challenge:
1. When a user hits the /api endpoint with query params, filter the data so
we only serve objects that meet their requirements.

The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;
Object.has
  res.json(
    filteredData.filter(
      (item) =>
        (industry
          ? item.industry.toLowerCase() === industry.toLowerCase()
          : true) &&
        (country
          ? item.country.toLowerCase() === country.toLowerCase()
          : true) &&
        (continent
          ? item.continent.toLowerCase() === continent.toLowerCase()
          : true) &&
        (is_seeking_funding
          ? item.is_seeking_funding.toString() === is_seeking_funding
          : true) &&
        (has_mvp ? item.has_mvp.toString() === has_mvp : true)
    )
  );
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
