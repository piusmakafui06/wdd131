const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = `<span class="highlight">Last Modification ${document.lastModified}</span>`;

function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(1) + "°C";
}

const currentTemperature = 25;
const currentWindSpeed = 21;

const value = document.getElementById("windchill");

if (currentTemperature <= 10 && currentWindSpeed > 4.8) {
    value.textContent = calculateWindChill(currentTemperature, currentWindSpeed);
} else {
    value.textContent = "N/A";
}

