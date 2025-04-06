import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("searchTerm");
const songList = document.getElementById("songsList");
const noSongs = document.getElementById("noSongs");
const loadingSpinner = document.getElementById("loadingSpinner");

var timeout = null;

export default () => {
    console.log("Startam Aplikaciju..");

    inputElement.addEventListener("keyup", updateMusicList)

    function updateMusicList(){

        clearTimeout(timeout);

        timeout = setTimeout( async () => {

            const inputElementValue = inputElement.value.trim();
            while(songList.firstChild){
                songList.removeChild(songList.firstChild);
            }

            if(inputElement.value){

                // gasimo noSongs
                noSongs.style.display = "none";
                
                // palimo loading spinner
                loadingSpinner.style.display = "block";
                var retData = [];
                retData = await fetchData(inputElementValue);

                //gasimo loading spinner
                loadingSpinner.style.display = "none";

                if(retData.length != 0){
                    for (var i in retData){
                        //api request
                        const listItemElement = createElement(retData[i]);
                        songList.appendChild(listItemElement);
                    }
                } else {
                    // palimo noSongs
                    noSongs.style.display = "block";
                }

            }  else {
                // palimo noSongs
                noSongs.style.display = "block";
            }     

        },800);
    }
};