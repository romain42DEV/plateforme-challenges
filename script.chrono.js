let time = 0;
let interval = null;

const chrono = document.getElementById("chrono");

// Démarrer
document.getElementById("start").addEventListener("click", () => {

// Empêche plusieurs intervalles
if (interval !== null) return;

interval = setInterval(() => {
    time++;
    chrono.textContent = time;
    }, 1000);
});

// Arrêter
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

// Réinitialiser
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    time = 0;
    chrono.textContent = time;
});
