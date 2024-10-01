import loader from './views/loader'
import layout from './views/layout'
import createSongs from './views/songs'
import { fetchSongs } from './data'
import { render } from './render'

export default () => {
	const layoutContainer = document.getElementById('app');
	render({ markup: layout, el: layoutContainer });

	const appContainer = document.getElementById('content') || layoutContainer;
	const searchInput = document.getElementById('search');
	
  	searchInput.addEventListener('keydown', (e) => {
	  const newValue = e.target.value;
	  
	  render({ markup: loader, el: appContainer });
	  
      fetchSongs(newValue).then(songs => {
		render({ markup: createSongs(songs), el: appContainer });
      })
  })
}
