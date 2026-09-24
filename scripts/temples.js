const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = `<span class="highlight">Last Modification ${document.lastModified}</span>`;

const mainnav = document.querySelector(".navigation");
const hambtn = document.querySelector("#menu");

hambtn.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambtn.classList.toggle("show");
});