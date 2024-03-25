const formBox = document.querySelector("#first");
const sumbitButton = document.querySelector("#submit");
const email = document.querySelector("#mail");
const cardBox = document.querySelector("#second");
const returnBack = document.querySelector("#return");
const displayMessage = document.querySelector("#result")

sumbitButton.addEventListener("click", () => {
    if (email.value === "") {
        displayMessage.innerHTML = "Please Input your email address"
    } else {
        formBox.classList.add("hidden");
        cardBox.classList.replace("hidden", "preview")
        email.value = "";
        displayMessage.innerHTML = "";
    }

});

returnBack.addEventListener("click", () => {
    formBox.classList.replace("hidden", "preview");
    cardBox.classList.replace("preview", "hidden")
});