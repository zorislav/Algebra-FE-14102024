import axios from 'axios';
import { debounce } from 'lodash';
import { Spinner } from 'spin.js';
import './style.css';
import logo from './Apple-Logosu.png'; 


const appleLogo = document.getElementById('appleLogo');
appleLogo.src = logo;


const spinner = new Spinner().spin();
const spinnerContainer = document.getElementById('spinner');
const resultsContainer = document.getElementById('results');
const noResultsMessage = "Pjesma nije nađena. Šteta...";

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', debounce(searchSongs, 300));

function showSpinner() {
    spinnerContainer.appendChild(spinner.el);
    spinnerContainer.style.display = 'block';
}

function hideSpinner() {
    spinnerContainer.style.display = 'none';
}

function searchSongs() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        resultsContainer.innerHTML = '';
        hideSpinner();
        return;
    }
    showSpinner();
    axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song`)
        .then(response => {
            if (response.data.resultCount === 0) {
                displayNoResultsMessage();
            } else {
                displayResults(response.data.results);
            }
            hideSpinner();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayErrorMessage();
            hideSpinner();
        });
}

function displayResults(results) {
    const limitedResults = results.slice(0, 20); 
    const html = limitedResults.map(song => `<li>${song.trackName} - ${song.artistName}</li>`).join('');
    resultsContainer.innerHTML = html;
}


function displayNoResultsMessage() {
    resultsContainer.innerHTML = `<p>${noResultsMessage}</p>`;
}

function displayErrorMessage() {
    resultsContainer.innerHTML = '<li>404 NOT FOUND!</li>';
}
