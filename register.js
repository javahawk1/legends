let api = axios.create({
    baseURL: "https://686e4873c9090c49538903ef.mockapi.io"
});

let box = document.querySelector(".form")
let ism = document.querySelector(".name")
let img = document.querySelector(".image")
let age = document.querySelector(".age")
let btn = document.querySelector(".button")

btn.addEventListener("click", () => {
    let user = {
        name: ism.value,
        img: img.value,
        age: age.value,
    }

    createData(user)

    ism.value = "";
    img.value = "";
    age.value = "";

    alert("Registered Succesfully")
});

async function createData(obj) {
  await api.post("/prods", obj);
}