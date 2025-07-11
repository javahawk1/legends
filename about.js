let about_todo = document.querySelector(".about_todo")

async function show() {
    let data = await fetch(`https://686fafe491e85fac42a21bf3.mockapi.io/products/${localStorage.getItem("todo_id")}`)
    let json = await data.json()

    about_todo.innerHTML = `
        <img src=${json.img} alt="rasm">
        <p class="about_name">Productname: ${json.productname}</p>
        <p class="about_about">${json.about}</p>
        <p class="about_price">price: ${json.price}$</p>
    `
}

show()