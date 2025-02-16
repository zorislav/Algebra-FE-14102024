import { fetchData } from "./data.js";
import { createEl } from "./render.js";

const inputEl = document.getElementById("search-term");
const ulEL = document.getElementById("ul");
const noSongs = document.getElementById("no-songs");
const spinner = document.getElementById("loading-spinner");

var timeout = null;

export default () => {
  inputEl.addEventListener("keyup", updateMusicList);

  function updateMusicList() {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      while (ulEL.firstChild) {
        ulEL.removeChild(ulEL.firstChild);
      }

      const inputElValue = inputEl.value.trim();

      if (inputElValue) {
        noSongs.style.display = "none";
        spinner.style.display = "block";

        var searchResults = await fetchData(inputElValue);

        spinner.style.display = "none";

        if (searchResults.length !== 0) {
          for (var i in searchResults) {
            const liEl = createEl(searchResults[i]);
            ulEL.appendChild(liEl);
          }
        } else {
          noSongs.style.display = "block";
        }
      } else {
        noSongs.style.display = "block";
      }
    }, 800);
  }
};
