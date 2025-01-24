const stdudentName = document.querySelector("#std_name");
const inputEl = document.querySelector("#txt_copy");
const pEl = document.querySelector("#p_ans");
const checkbox = document.querySelector("#chk_enable");
const buttonEls = document.querySelectorAll(".btn");

const handleInput = ({ target: { value } }) => {
    inputEl.value = value;
    pEl.textContent = value;
};

const handleClick = (btn) => {
    const className = btn.classList.item(1);

    switch (className) {
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
};

const handleChange = () => {
    inputEl.readOnly = !checkbox.checked;
};

stdudentName.addEventListener("input", handleInput);
checkbox.addEventListener("change", handleChange);
buttonEls.forEach((button) => {
    button.addEventListener("click", () => handleClick(button));
});
