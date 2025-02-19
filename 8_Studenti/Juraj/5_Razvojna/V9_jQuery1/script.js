const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", main);

function main(){

    // Dohvati pokemone

async function getPokemons(){

    const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");
    const responseData = await response.json();

    return responseData.pokemon_species.slice(0, 20);
    

}


    // prikaži pokemone
    function fillList(pokemons){
        const context = { pokemon: pokemons};
        const html = template(context);
        destination.innerHTML = html;
        $('[data-toggle="popover"]').popover();
        afterRender();
    }

function afterRender(){
    $("table th").css("color", "darkBlue");
    $("table tr:nth-child(3)").addClass(striped);
}

getPokemons().then(pkmns => {
    fillList(pkmns);
    
});

}