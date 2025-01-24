const stdudentName = document.querySelector("#std_name");
const inputEl = document.querySelector("#txt_copy");
const pEl = document.querySelector("#p_ans");
const buttons = document.querySelectorAll(".btn");

const handleInput = ({ target: { value } }) => {
    inputEl.value = value;
    pEl.textContent = value;
}

const handleClick = (btn) => {
    const className = btn.classList.item(1);
  
    switch(className) {
        case "btn-success":
            pEl.style.color = "green";
            break;
        case "btn-danger":
            pEl.style.color = "red";
            break;
        case "btn-warning":
            pEl.style.color = "yellow";
            break;
        case "btn-dark":
            pEl.style.color = "black";
            break;
    }
}

stdudentName.addEventListener("input", handleInput);
buttons.forEach((button) => {
    button.addEventListener("click", () => handleClick(button));
});