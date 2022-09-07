"use strict";
/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery).
*/
// RENDER
class render {
    clean() {
        $(".user-container").empty();
        $(".quote-container").empty();
        $(".pokemon-container").empty();
        $(".meat-container").empty();
        $(".friends-container").empty();
    }
    rendQuote(quote) {
        const source = $('#ye-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ quote });
        // append our new html to the page
        $('.quote-container').append(newHTML);
    }
    rendBacon(bacon) {
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ bacon });
        $('.meat-container').append(newHTML);
    }
    rendPokemon(pokemon) {
        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);
        $('.pokemon-container').append(newHTML);
    }
    rendUser(user) {
        const source = $("#user-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);
        $('.user-container').append(newHTML);
    }
    rendFriends(friends) {
        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(friends);
        $('.friends-container').append(newHTML);
    }
    rendAll(result) {
        this.clean();
        this.rendQuote(result["ye"]);
        this.rendBacon(result["bacon"]);
        this.rendPokemon(result["pokemon"]);
        this.rendUser(result["user"]);
        this.rendFriends(result["friends"]);
    }
}
