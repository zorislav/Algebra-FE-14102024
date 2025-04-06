// Glavni funkcionalni kod
import { fetchSongData } from "./data.js";
import { generateSongItem } from "./render.js";

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");
const noResultsMessage = document.getElementById("noResultsMessage");
const loadingSpinner = document.getElementById("loadingSpinner");

let typingTimeout = null;

searchInput.addEventListener("input", handleSearch);

function handleSearch() {
  clearTimeout(typingTimeout);

  typingTimeout = setTimeout(async () => {
    const query = searchInput.value.trim();

    resultList.innerHTML = ""; // Clear previous results
    noResultsMessage.style.display = "none"; // Hide the "no results" message
    loadingSpinner.style.display = "block"; // Show loading spinner

    if (query) {
      const songData = await fetchSongData(query);
      loadingSpinner.style.display = "none"; // Hide spinner after data is fetched

      if (songData.length > 0) {
        songData.forEach((song) => {
          const songItem = generateSongItem(song);
          resultList.appendChild(songItem);
        });
      } else {
        noResultsMessage.style.display = "block"; // Show message if no songs found
      }
    } else {
      noResultsMessage.style.display = "block"; // Show message if input is empty
    }
  }, 500); // 500ms delay to limit number of API calls
}
