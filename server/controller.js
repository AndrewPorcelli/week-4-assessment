let carID = 1;
const cars = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    // list of fortunes
    const fortunes = [
      "You will grow 10 inches taller",
      "Success awaits you!",
      "A light heart carries you through all the hard times.",
      "A dog will creep its way into your life",
      "You will find a penny today!",
    ];

    // getting the fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  createCar: (req, res) => {
    const { make, model, year, price } = req.body;
    let newCar = {
      make,
      model,
      year,
      price: +price,
      id: carID,
    };
    cars.push(newCar);
    carID++;
    res.status(200).send(cars);
  },
};
