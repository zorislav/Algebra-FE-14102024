import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("serch-term");
const ulElement = document.getElementById("songs-list");
const noSongsmsg = document.getElementById("no-songs");
const loadSpin = document.getElementById("loading-spinner");

var timeout = null;

export default () => {
    console.log("startam aplikaciju...");

    inputElement.addEventListener("keyup",updateMusicList)

    function updateMusicList(){

        clearTimeout(timeout);

        timeout = setTimeout( async ()=> {

            const inputElementValue = inputElement.value.trim();

            inputElement.value = "";

            while(ulElement.firstChild){
                ulElement.removeChild(ulElement.firstChild);

            }

            if(inputElementValue){

                //gasimo no-songs
                noSongsmsg.style.display = "none";

                //palimo loading spiner
                loadSpin.style.display = "block";

                var retData = [];
                retData =await fetchData(inputElementValue);

                //gasimo loading spiner
                loadSpin.style.display = "none";
                if(retData.lenght !==0){
                    for(var i in retData){
                       const listItemElement = createElement(retData[i]);
                       ulElement.appendChild(listItemElement);
                }
            } else{
                //palimo no-songs
                noSongsmsg.style.display = "block";
            }

            }else{
                //palimo no-songs
                noSongsmsg.style.display = "block";
            }
        },800);
   
    }
}