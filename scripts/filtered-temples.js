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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "images/aba-nigeria-temple-lds-273999-wallpaper.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "images/manti-temple-768192-wallpaper.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "images/payson-utah-temple-exterior-1416671-wallpaper.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "images/yigo_guam_temple_2.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "images/washington_dc_temple-exterior-2.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "images/lima-peru-temple-evening-1075606-wallpaper.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "images/mexico-city-temple-exterior-1518361-wallpaper.webp"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Ivory Coast",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl:
           "images/abidjan-ivory-coast-temple-58993-main.webp"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "images/accra-ghana-temple-13760-main.webp"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
           "images/adelaide-australia-temple-4359-main.webp" 
    },
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "Home";
    createTempleCard(temples)
});
oldLink.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "Old";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900))
});
newLink.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "New";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000))
});
largeLink.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "Large";
    createTempleCard(temples.filter(temple => temple.area > 90000))
});
smallLink.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "Small";
    createTempleCard(temples.filter(temple => temple.area < 10000))
});

function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
};