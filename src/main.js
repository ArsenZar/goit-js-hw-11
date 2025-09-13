import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";

const form = document.querySelector(".form");
const input = document.querySelector(".formInput");

form.addEventListener("submit", e => {
  e.preventDefault();

  getImagesByQuery(input.value)
    .then(res => console.log(res))
    .catch(err => console.log(err));
});
