export const getData = async (inputElValue) => {
    try {  
      const response = await fetch(`https://itunes.apple.com/search?term=${inputElValue}&media=music`);
      const data = await response.json();
    
      const returnData = data.results.map(result => {
        return {
          artist: result.artistName,
          song: result.trackName
        }
      });
    
      return returnData;
  
    } catch (error) {
  
      console.log(error);
      return [];  
    }  
  }