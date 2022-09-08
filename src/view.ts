/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery). 
*/


// RENDER

class render {
    
    private clean(): void {
        $(".user-container").empty();
        $(".quote-container").empty();
        $(".pokemon-container").empty();
        $(".meat-container").empty();
        $(".friends-container").empty();
    }
   
    private rendQuote(quote:string): void {    // ye quote
        const source = $('#ye-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({quote}); 
        
        // append our new html to the page
        $('.quote-container').append(newHTML);
    }

    private rendBacon(bacon:string): void {     // bacon ipsum
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({bacon}); 
        
        $('.meat-container').append(newHTML);
    }

    private rendPokemon(pokemon:typeof Pokemon): void {       // Pokemon
        Handlebars.registerHelper('makeCapital', (str) => `${str.charAt(0).toUpperCase() + str.slice(1)}`)
        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);

        $('.pokemon-container').append(newHTML);
    }

    private rendUser(user:typeof User): void {        // main user
        const source = $("#user-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);

        $('.user-container').append(newHTML);
    }

    private rendFriends(friends:typeof Friend[]): void {      // friends list
        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({friends});

        $('.friends-container').append(newHTML);
    }


    rendAll(result:typeof Data): void {
        this.clean();
        this.rendQuote(result["ye"]);
        this.rendBacon(result["bacon"]);
        this.rendPokemon(result["pokemon"]);
        this.rendUser(result["user"]);
        this.rendFriends(result["friends"]);
    }
}
