const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", main);

function main() {
  // Dohvati pokemone

  async function getPomemons() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );
    const responseData = await response.json();

    return responseData.pokemon_species.slice(0, 20);
  }

  // Prikazi pokemone
  function fillList(pokemons) {
    const context = { pokemon: pokemons };
    const html = template(context);
    destination.innerHTML = html;
    $('[data-toggle="popover"]').popover();
  }

  getPomemons().then((pkmns) => {
    fillList(pkmns);
  });
}
