export const generateSongItem = (song) => {
  const listItem = document.createElement("li");

  const textNode = document.createTextNode(`${song.artist} - ${song.song}`);
  listItem.appendChild(textNode);

  return listItem;
};
