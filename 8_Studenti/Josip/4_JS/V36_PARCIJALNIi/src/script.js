import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("searchTerm");
const ulElement = document.getElementById("songsList");
const noSongsMsg = document.getElementById("noSongs");
const loadSpin = document.getElementById("loadingSpinner");

var timeout = null;

export default () => {
  const updateMusicList = (event) => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }

      const inputElementValue = inputElement.value.trim();

      if (inputElementValue) {
        // gasimo noSongs

        noSongsMsg.style.display = "none";

        // palimo loadingSpinner
        loadSpin.style.display = "block";

        // dohvati podatke
        var retData = [];
        retData = await fetchData(inputElementValue);

        // gasimo loadingSpinner

        loadSpin.style.display = "none";

        if (retData.length !== 0) {
          // prikaži podatke
          for (var i in retData) {
            if (retData[i].artist && retData[i].song) {
              const listItemElement = createElement(retData[i]);

              ulElement.appendChild(listItemElement);
            }
          }
        } else {
          // palimo noSongs
          noSongsMsg.style.display = "block";
        }
      } else {
        // palimo noSongs
        noSongsMsg.style.display = "block";
      }
    }, 800);
  };

  inputElement.addEventListener("keyup", updateMusicList);
};
