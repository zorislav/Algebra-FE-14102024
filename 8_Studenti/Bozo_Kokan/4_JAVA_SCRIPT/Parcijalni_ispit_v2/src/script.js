const inputElement = document.getElementById("searchTerm");

var timeout = null;

export default () => {
    console.log("Startam Aplikaciju..");

    inputElement.addEventListener("keyup", updateMusicList)

    function updateMusicList(){

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            
            //api request

            console.log(inputElement.value);

        },800);
    }
};