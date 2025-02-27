export const fetchData = async (search_term) => {
  const url = `https://itunes.apple.com/search?term=${search_term}&media=music`;

  try {
    const response = await fetch(url);
    const searchResults = await response.json();

    const returnData = searchResults.results.map((result) => {
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });

    return returnData;
  } catch (error) {
    console.log(error);
  }
};
