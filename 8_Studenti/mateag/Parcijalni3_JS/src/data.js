export const fetchSongData = async (searchQuery) => {
  const url = `https://itunes.apple.com/search?term=${searchQuery}&entity=song&limit=10`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((item) => ({
      artist: item.artistName,
      song: item.trackName,
    }));
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka: ", error);
    return [];
  }
};
