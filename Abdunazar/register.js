let api = axios.create({
    baseURL: ""
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
        age: age.vlaue,
    }

    

    ism.value = "";
    img.value = "";
    img.value = "";

    createData(user)

    window.location.href = "./users.html";
});

async function createData(obj) {
  await api.post("/users", obj);
  getData();
}