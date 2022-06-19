// Elements
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector("#fortune-button");
const bodyContainer = document.querySelector("#cars-container");
const form = document.querySelector("form");

// Callbacks
const carCallback = ({ data: cars }) => displayCars(cars);

const createCarInput = (body) =>
  axios.post("http://localhost:4000/api/car", body).then(carCallback);

  const deleteCar = id => axios.delete(`http://localhost:4000/api/car/${id}`).then(carCallback)

// Axios functions
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment").then((res) => {
    const data = res.data;
    // console.log(res.data);
    // console.log(document.location.host);
    // console.log(document.location.pathname);
    alert(data);
  });
};

function getFortune() {
  axios.get("http://localhost:4000/api/fortune").then((res) => {
    // console.log(res.data);

    // console.log(document.location.host);
    // console.log(document.location.pathname);
    alert(res.data);
  });
}

function submitHandler(e) {
  e.preventDefault();

  let make = document.querySelector("#make");
  let model = document.querySelector("#model");
  let year = document.querySelector("#year");
  let price = document.querySelector("#price");

  let bodyObj = {
    make: make.value,
    model: model.value,
    year: year.value,
    price: price.value,
  };

  createCarInput(bodyObj);

  make.value = "";
  model.value = "";
  year.value = '';
  price.value = '';
}

// year: dropdown selector, price = input.value (will have plus, minus button), make = input.value, model = input.value, maybe add an img?
function createCar(newCar) {
  let carCard = document.createElement("div");
  carCard.classList.add();

  carCard.innerHTML = `<p>${newCar.make} ${newCar.model}</p>
    <div class="btn-container">
    <button onclick="updateCar(${newCar.id}, 'minus')">-</button>
    <p >${newCar.price}</p>
    <button onclick="updateCar(${newCar.id}, 'plus')">+</button>
</div>
<button onclick="deleteCar(${newCar.id})">delete</button>`;

  bodyContainer.appendChild(carCard);
}

function displayCars(arr) {
  bodyContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createCar(arr[i]);
  }
}

// Event Handlers
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitHandler);
