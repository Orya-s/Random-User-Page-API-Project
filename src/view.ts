/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery). 
*/


// RENDER

class render {
   
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

    private rendUser(user:any) {        // main user
        const source = $("#user-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);

        $('.user-container').append(newHTML);
    }

    private rendFriends(friends:any) {      // friends list
        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(friends);

        $('.friends-container').append(newHTML);
    }


    rendAll(result: any) {
        this.rendQuote(result["ye"])
        this.rendBacon(result["bacon"])
        this.rendPokemon(result["pokemon"])
        this.rendUser(result["user"]);
        this.rendFriends(result["friends"]);
    }
}

