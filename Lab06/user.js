const url = "https://jsonplaceholder.typicode.com/users"
const target = document.querySelector("#showData")
let htmlText = ""
const data = [];

async function readJson() {
    try {
        const res = await fetch(url);
        const users = await res.json();

        for (const user of users) {
            htmlText += `
            <div class="card m-4 border border-2 rounded-3 shadow p-2" style="width: 250px; height: max-content;">
                <div class="card-body">
                    <h5 class="card-title fw-bold mb-4">${user.name}</h5>
                    <p class="card-text">${user.email}</p>
                    <p class="card-text">${user.company.name}</p>
                    <p class="card-text">${user.company.catchPhrase}</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
            `;
            data.push(user);
        }
        target.innerHTML = htmlText;
    } catch (e) {
        console.error(e?.message);
    }
}

readJson().then(() => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn, i) => {
        btn.addEventListener("click", (e) => {
            alert(`Name: ${data[i].name}\nPhone: ${data[i].phone}`);
        })
    })
});