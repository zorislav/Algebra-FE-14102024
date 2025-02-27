let currentAudio = null; // Spremamo trenutno aktivan audio

document.getElementById('searchButton').addEventListener('click', searchSongs);
document.getElementById('searchInput').addEventListener('input', clearResults);

function searchSongs() {
    const artist = document.getElementById('searchInput').value.trim();
    if (artist === '') return;

    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&entity=song&limit=10`)
        .then(response => response.json())
        .then(data => {
            displaySongs(data.results);
        })
        .catch(error => console.error('Greška:', error));
}

function displaySongs(songs) {
    const songList = document.getElementById('songList');
    songList.innerHTML = ''; // Očisti prethodne rezultate

    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.trackName} - ${song.artistName}`;

        listItem.addEventListener('click', () => {
            playPreview(song.previewUrl);
        });

        songList.appendChild(listItem);
    });
}

function playPreview(url) {
    if (currentAudio) {
        currentAudio.pause(); // Pauziraj trenutno aktivan audio
    }

    currentAudio = new Audio(url);
    currentAudio.play();
}

function clearResults() {
    const input = document.getElementById('searchInput').value.trim();
    if (input === '') {
        document.getElementById('songList').innerHTML = ''; // Očisti listu pjesama
        if (currentAudio) {
            currentAudio.pause(); // Pauziraj pjesmu ako postoji
            currentAudio = null;
        }
    }
}
