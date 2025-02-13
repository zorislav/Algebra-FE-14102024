export const createElement = (songInfo) => {
    const listItem = document.createElement("li");
    const listItemP = document.createElement("p");
  
    listItemP.innerHTML = `${songInfo.artist} - ${songInfo.song}`;
    listItem.appendChild(listItemP);
  
    return listItem;
  
  }