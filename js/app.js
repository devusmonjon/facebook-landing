const form = document.querySelector(".info__name");
const info = document.querySelector(".info");
const name = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const createAccount = document.querySelector("#create__account");
const close = document.querySelector(".close");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alerer();
});

function alerer() {
    if (name.value.trim() && lname.value.trim()) {
        alert(`Salom ${name.value} ${lname.value}`);
    } else {
        alert("Please fill in the fields");
    }
}

createAccount.addEventListener("click", () => {
    info.classList.add("show");
});

close.addEventListener("click", () => {
    info.classList.remove("show");
});
