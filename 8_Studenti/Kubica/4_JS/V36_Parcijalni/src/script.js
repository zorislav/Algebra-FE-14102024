import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("serch-term");
const ulElement = document.getElementById("songs-list");
const noSongsMsg = document.getElementById("no-songs");
const loadSpin = document.getElementById("loading-spinner");

var timeout = null;

export default () => {
  console.log("Startam aplikaciju...");

  inputElement.addEventListener("keyup", updateMusicList);

  function updateMusicList() {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const inputElementValue = inputElement.value.trim();

      //inputElement.value = "";

      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }

      if (inputElementValue) {
        noSongsMsg.style.display = "none";
        loadSpin.style.display = "block";

        var retData = [];
        retData = await fetchData(inputElementValue);

        loadSpin.style.display = "none";

        if (retData.length !== 0) {
          for (var i in retData) {
            const listItemElement = createElement(retData[i]);
            ulElement.appendChild(listItemElement);
          }
        } else {
          noSongsMsg.style.display = "block";
        }
      } else {
        noSongsMsg.style.display = "block";
      }
    }, 800);
  }
};
