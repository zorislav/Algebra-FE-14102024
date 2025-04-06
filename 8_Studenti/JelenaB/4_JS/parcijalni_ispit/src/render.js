export const createEl = (songData) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = `${songData.artist} - ${songData.song}`;
  li.appendChild(p);
  return li;
};
