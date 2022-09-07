/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery). 
*/


// RENDER

class render {
    data = {
        quote: ""
    }

   
    constructor() {
    }

    private rendQuote(quote:any) {    // ye quote
        const source = $('#ye-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({quote}); 
        
        // append our new html to the page
        $('.quote-container').append(newHTML);
    }

    private rendBacon(bacon: any) {     // bacon ipsum
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({bacon}); 
        
        $('.meat-container').append(newHTML);
    }

    private rendPokemon(pokemon:any) {     // Pokemon
        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);

        $('.pokemon-container').append(newHTML);
    }


    rendAll(result: any) {
        console.log(result["ye"]);
        this.rendQuote(result["ye"])

        console.log(result["bacon"]);
        this.rendBacon(result["bacon"])

        console.log(result["pokemon"]);
        this.rendPokemon(result["pokemon"])
    }
}

