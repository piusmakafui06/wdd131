const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = `<span class="highlight">Last Modification ${document.lastModified}</span>`;