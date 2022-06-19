const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  createCar,
  deleteCar,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/car/", createCar);
app.delete("/api/car/:id", deleteCar);

app.listen(4000, () => console.log("Server running on 4000"));
