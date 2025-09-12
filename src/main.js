import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const myApiKey = "52255318-c301db47a64feee351027f4f6";



axios.get("https://pixabay.com/api/?key=52255318-c301db47a64feee351027f4f6&q=yellow+flowers&image_type=photo")
.then(res => console.log(res.data)
);