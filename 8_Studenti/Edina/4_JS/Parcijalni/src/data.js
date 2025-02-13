export const fetchData = async (inputElValue) => {
  const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    //map uzima svaki element ulaznog niza i transformira ga na nacin na koji mi hocemo
    //map vraća uvijek novi niz gdje svaki element novog niza će biti ono što vratimo iz unutrašnje funkcije
    const returnData = data.results.map((result) => {
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });
    return returnData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
