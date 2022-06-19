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
  updateCar,
  getSomething,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/car/", createCar);
app.delete("/api/car/:id", deleteCar);
app.put("/api/car/:id", updateCar);
app.get("/api/something", getSomething)

app.listen(4000, () => console.log("Server running on 4000"));
