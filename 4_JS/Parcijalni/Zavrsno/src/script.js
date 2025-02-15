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
  
      const inputElementValue = inputElement.value;
  
      if( inputElementValue ) {
  
        noSongsMsg.style.display = "none";
  
        loadSpin.style.display = "block";
  
        // Dohvati podatke
        var retData = [];
        retData = await fetchData(inputElementValue);
  
        loadSpin.style.display = "none";
  
        if(retData.length !== 0) {
  
          // Prikazi podatke
          for( var i in retData) {
  
            if(retData[i].artist && retData[i].song) {
  
              const listItemElement = createElement(retData[i]);
  
              ulElement.appendChild(listItemElement);
  
            }
  
          }
  
        } else {
  
          noSongsMsg.style.display = "block";
  
        }
  
      } else {
        noSongsMsg.style.display = "block";
      }
  
    }, 800);
  
  }
  
  inputElement.addEventListener("keyup", updateMusicList);

}

