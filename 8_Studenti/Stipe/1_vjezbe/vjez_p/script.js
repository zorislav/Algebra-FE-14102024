const apiKey = '0fb2eb35622bdaaaa3d2ff6dfa9076e8'; // Zamijeni sa svojim OpenWeatherMap API ključem


document.getElementById('button').addEventListener('click', () => {
    const city = document.getElementById('input').value;
    if (city.trim() === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('Grad nije pronađen!');
                return;
            }

            // Postavljanje imena grada
            document.getElementById('input-location').textContent = data.name;

            // Postavljanje koordinata (LAT | LON)
            document.getElementById('country').textContent = `${data.coord.lat.toFixed(2)} | ${data.coord.lon.toFixed(2)}`;

            // Postavljanje vremenske zone
            const timezoneOffset = data.timezone; // vremenska razlika u sekundama od UTC
            updateTime(timezoneOffset);

            // Postavljanje trenutnog datuma
            updateDate(timezoneOffset);
        })
        .catch(error => console.error('Greška:', error));
});

// Funkcija za prikaz trenutnog datuma za odabrani grad
function updateDate(timezoneOffset) {
    const now = new Date(Date.now() + timezoneOffset * 1000);
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('hr-HR', options);
}

// Funkcija za ažuriranje vremena svake sekunde za odabrani grad
function updateTime(timezoneOffset) {
    function setTime() {
        const now = new Date(Date.now() + timezoneOffset * 1000);

        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');

        document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setTime(); // Pokreće funkciju odmah
    setInterval(setTime, 1000); // Ažurira svake sekunde
}
