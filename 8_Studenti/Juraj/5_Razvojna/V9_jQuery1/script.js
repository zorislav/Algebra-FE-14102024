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

function addStripes() {
    $('table tr').removeClass('striped');
    $('table tr:nth-child(even)').addClass('striped');
}


    // prikaži pokemone
    function fillList(pokemons){
        const context = { pokemon: pokemons};
        const html = template(context);
        destination.innerHTML = html;
        $('[data-toggle="popover"]').popover();
        afterRender();
    }
    addStripes();

function afterRender(){
    $("table th").css("color", "darkBlue");

    $("table tr:nth-child(3)").addClass(striped);

     // nakon 2 sekunde brišemo sve pokemone koji počinju s 'p'

     addStripes();

     setTimeout(function() {
        const hideElements = $("table td a:contains('p')").filter(function(){
            // return true ili false
            return this.innerHTML.indexOf('p') == 0;
        });
        hideElements.closest('tr').remove();
        addStripes();
        
        const info = $('<div></div>').insertAfter($('#pokemon-list')).text('Skriveno: ' + hideElements.length);
    }, 2000);
}



getPokemons().then(pkmns => {
    fillList(pkmns);
    
});

}