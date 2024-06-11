const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

function showRedLight() {
    redLight.classList.add('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

function showYellowLight() {
    redLight.classList.remove('active');
    yellowLight.classList.add('active');
    greenLight.classList.remove('active');
}

function showGreenLight() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.add('active');
}

function startTrafficIndicator() {
    let currentLight = 0;
    setInterval(() => {
        if (currentLight === 0) {
            showRedLight();
            currentLight = 1;
        } else if (currentLight === 1) {
            showYellowLight();
            currentLight = 2;
        } else if (currentLight === 2) {
            showGreenLight();
            currentLight = 0;
        }
    }, 5000); // Change every 5 seconds
}

document.addEventListener('DOMContentLoaded', startTrafficIndicator);
