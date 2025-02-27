// Selektiraj spremnik za snijeg
const snowContainer = document.getElementById('snow-container');

// Funkcija za generiranje pahulja
function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Nasumična veličina pahulje
    const size = Math.random() * 10 + 5; // Veličine između 5px i 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Nasumična pozicija na početku
    snowflake.style.left = `${Math.random() * 100}vw`; // Horizontalna pozicija između 0% i 100%

    // Nasumično trajanje animacije (brzina pada)
    const duration = Math.random() * 5 + 3; // Između 3s i 8s
    snowflake.style.animationDuration = `${duration}s`;

    // Nasumično kašnjenje animacije
    const delay = Math.random() * 5; // Između 0s i 5s
    snowflake.style.animationDelay = `${delay}s`;

    // Dodaj pahulju u spremnik
    snowContainer.appendChild(snowflake);

    // Ukloni pahulju nakon završetka animacije
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Generiraj više pahulja
function generateSnow() {
    setInterval(createSnowflakes, 50); // Dodaje novu pahulju svake 0.05 sekunde
}

// Pokreni snijeg
generateSnow();