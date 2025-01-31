const url = "https://jsonplaceholder.typicode.com/users"
const target = document.querySelector("#showData")
let htmlText = ""

async function readJson() {
    const res = await fetch(url)
    const users = await res.json()

    for (const user of users) {
        htmlText += `
        <div class="card m-4 border border-2 rounded-3 shadow p-2" style="width: 250px; height: max-content;">
            <div class="card-body">
                <h5 class="card-title fw-bold mb-4">${user.name}</h5>
                <p class="card-text">${user.email}</p>
                <p class="card-text">${user.company.name}</p>
                <p class="card-text">${user.company.catchPhrase}</p>
                <a href="#" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `
    }
    target.innerHTML = htmlText;
}

readJson();