let form_btn = document.getElementById("form_btn")
let product_name = document.getElementById("product_name")
let product_about = document.getElementById("product_about")
let product_price = document.getElementById("product_price")
let product_img = document.getElementById("product_img")
let root = document.getElementById("root")

root.addEventListener("click", (e) => {
    if (e.target.classList.contains("card_link")) {
        localStorage.setItem("todo_id", e.target.closest(".card").id)
        window.location.assign("about.html")
    }
})

async function show() {
    try {
        root.innerHTML = ""
        let data = await fetch("https://686fafe491e85fac42a21bf3.mockapi.io/products")
        let json = await data.json()

        json.forEach((item) => {
            root.insertAdjacentHTML("beforeend", `
            <div class="card" id=${item.id}>
                <img src=${item.img}
                    alt="rasm">
                <h2>${item.productname}</h2>
                <p class="about">${item.about}</p>
                <p class="price">$${item.price}</p>
                <button class="card_link">Batafsil</button>
            </div>
            `)
        })
    } catch (err) {
        console.log(err)
    }
}

form_btn.addEventListener("click", async () => {
    let tekshiruv = product_name.value.trim() !== "" &&
        product_about.value.trim() !== "" &&
        product_price.value.trim() !== "" &&
        product_img.value.trim() !== "";

    if (tekshiruv) {
        try {
            await fetch('https://686fafe491e85fac42a21bf3.mockapi.io/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productname: product_name.value,
                    about: product_about.value,
                    price: product_price.value,
                    img: product_img.value
                })
            });
            show()
        } catch (err) {
            console.log("Xatolik:", err);
        }
    }
});

show()