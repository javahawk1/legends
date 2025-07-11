let root = document.getElementById("root")

async function show() {
    let data =  await fetch("https://686e4873c9090c49538903ef.mockapi.io/prods")
    let json = await data.json()

    json.forEach((item) => {
        root.insertAdjacentHTML("beforeend", `
           <div class="card">
                <img src=${item.image} alt="rasm">
                <p>Username: ${item.name}</p>
                <p>Age: ${item.age}</p>
            </div> 
            `)
    })

}

show()