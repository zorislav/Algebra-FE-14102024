document.addEventListener("DOMContentLoaded", main);

function main() {
  
  const pokemons = [];
  
  // Dohvati pokemone
  
  // async function getPomemons() {
    //   const response = await fetch(
      //     "https://pokeapi.co/api/v2/pokemon-color/yellow"
      //   );
      //   const responseData = await response.json();
      
      //   return responseData.pokemon_species.slice(0, 20);
      // }
      
      // Prikazi pokemone
    function fillList(pokemon) {
      const source = document.getElementById("hb-template").innerHTML;
      const destination = document.getElementById("hb-result");
      const template = Handlebars.compile(source);

    console.log(pokemons);
    const context = { pokemon: pokemons.slice(0, 20), tableClass: 'table' };
    const html = template(context);
    destination.innerHTML = html;
    $('[data-bs-toggle="popover"]').popover();

    afterRender();
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");
    addStripes();

    $('table tr').on("mouseenter", (event) => {
      $(event.currentTarget).css('backgroundColor', 'yellow');
    });

    $('table tr').on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr('style');
    });

    // Nakon 2 sec brisemo sve pokemone koji pocinju sa p
    setTimeout(function(){
      const hideElements = $("table td a:contains('p')").filter(function(){
        // return true ili false
        return this.innerHTML.indexOf('p') == 0;
      });
      hideElements.closest('tr').remove();
      addStripes();

      // ispisi broj uklonjenih elemenata
      $('<div></div>').insertAfter($('#hb-template')).text(`Skriveno: ${hideElements.length}`);
    },2000)
  }

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  // getPomemons().then((pkmns) => {
  //   fillList(pkmns);
  // });
  
  $.ajax("https://pokeapi.co/api/v2/pokemon-color/yellow",{
    success: function(data, status, jqXHR){
      $.when.apply($, data.pokemon_species.map(function(pokemon){
        return getDetails(pokemon);
      })).done(function(){
        fillList(pokemons);
      });
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(`${jqXHR.status} - ${jqXHR.statusText} - ${jqXHR.responseText}`)
    }
  })

  function getDetails(pokemon){
    return $.ajax(pokemon.url,{
      success: function(data){
        const hab = data.habitat ? data.habitat.name: "";
        const growth = data.growth_rate ? data.growth_rate.name: "";

        const pokData = {
          name: pokemon.name,
          url: pokemon.url,
          habitat: hab,
          growth_rate: growth
        };

        pokemons.push(pokData);

      },
      error: function(){}
    });
  }
  
  $(window).resize(() => {
    console.log($(window).width());
  });
}
