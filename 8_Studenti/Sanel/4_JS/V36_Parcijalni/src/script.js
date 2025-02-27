import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("search-term");
const ulElement = document.getElementById("songs-list");
const noSongsMsg = document.getElementById("no-songs")
const loadSpin = document.getElementById("loading-spinner");

var timeOut = null;

export default () => {
    console.log("Startam aplikaciju...");

    inputElement.addEventListener("keyup", updateMusicList);

    function updateMusicList(){

        clearTimeout(timeOut);

        timeOut = setTimeout(async () => {
            
            const inputElementValue = inputElement.value.trim();

            while(ulElement.firstChild) {
                ulElement.removeChild(ulElement.firstChild);
            }

            if(inputElementValue) {

                // gasimo no-songs
                noSongsMsg.style.display = "none";
                // palimo loading spinner
                loadSpin.style.display = "block";

                var retData = [];
                retData =await fetchData(inputElementValue);

                // gasimo loading spinner
                loadSpin.style.display = "none";

                if(retData.length !== 0) {
                    for(var i in retData) {
            
                        const listItemElement = createElement(retData[i]);
                        ulElement.appendChild(listItemElement);
                    }
                } else {
                    // palimo no-songs 
                    noSongsMsg.style.display = "block";
                }
            } else {
                // palimo no-songs
                noSongsMsg.style.display = "block";
            }
        }, 800);

        
    }

}