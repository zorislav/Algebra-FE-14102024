const inputElement = document.getElementById("search-term");

var timeout = null;

export default () => {
  console.log("Startam aplikaciju...");

  inputElement.addEventListener("keyup", updateMusicList);

  function updateMusicList() {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      //API request
      console.log(inputElement.value);
    }, 800);
  }
};
