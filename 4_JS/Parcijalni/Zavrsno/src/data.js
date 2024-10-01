import jsonp from 'jsonp'

function parseSong(song) {
  if (song) {
    return {
      title: song.trackName,
      artist: song.artistName,
    }
  }
}

function parseSongs(songs) {
	return songs.map(parseSong).filter(Boolean);
}

export function fetchSongs(term) {
  return new Promise(resolve => {
    jsonp(`https://itunes.apple.com/search?term=${term}&entity=song`, (err, res) => {
      resolve(parseSongs(res.results))
    })
  });
}
