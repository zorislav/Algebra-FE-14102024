document.addEventListener("DOMContentLoaded", main);

function main() {
  // Dohvati pokemone

  async function getPokemons() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );
    const responseData = await response.json();
    console.log(responseData);
  }

  // Prikazi pokemone

  getPokemons();
}
