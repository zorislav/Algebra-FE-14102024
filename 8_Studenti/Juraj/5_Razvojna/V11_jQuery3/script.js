const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", main);

function main(){

    const pokemons = [];
    // Dohvati pokemone

// async function getPokemons(){

//     const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");
//     const responseData = await response.json();

//     return responseData.pokemon_species.slice(0, 20);
    

// }

function addStripes() {
    $('table tr').removeClass('striped');
    $('table tr:nth-child(even)').addClass('striped');
}


    // prikaži pokemone
    function fillList(pokemons){
        console.log(pokemons);
        const context 	= { pokemon: pokemons.slice(0, 20), tableClass: "table" };
		const html     	= template(context);
        destination.innerHTML = html;
        $('[data-toggle="popover"]').popover();
      
        
        afterRender();
    }
    function afterRender() {
		$('[data-toggle="popover"]').popover();
		$("table th").css("color", "darkBlue");	


    $("table tr").on('mouseenter', event => {
        $(event.currentTarget).css("backgroundColor", "yellow");
    });
    
    $("table tr").on("mouseleave", event => {
        $(event.currentTarget).removeAttr("style");
    });

    addStripes();

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



// getPokemons().then(pkmns => {
//     fillList(pkmns);
    
// });

$.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow",{
    success: function(data, status, jqXHR){
    $.when.apply($, data.pokemon_species.map(function(){
            return getDetails(pokemon)
        })).done(function(){
        fillList()
    });
},
    error: function(jqXHR, textStatus, errorThrown){
        console.log(`${jqXHR.status} - ${jqXHR.statusText} - ${jqXHR.responseText}`);
        
    }
});

function getDetails(pokemon){
    
    return $.ajax(pokemon.url,{
        success: function(data){
           
            const hab = data.habitat ?  data.habitat.name : "";
            const grow = data.growth_rate ?  data.growth_rate.name : "";
            const pokData = {
                name: pokemon.name,
                url: pokemon.url,
                habitat: hab, 
                growth_rate: grow, 
            }

            pokemons.push(pokData);
        },
    });
}

$(window).resize(() => {
    console.log($( window ).width());
});

}