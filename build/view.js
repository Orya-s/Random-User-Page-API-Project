"use strict";
/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery).
*/
// RENDER
class render {
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
        console.log(result["ye"]);
        this.rendQuote(result["ye"]);
        console.log(result["bacon"]);
        this.rendBacon(result["bacon"]);
        console.log(result["pokemon"]);
        this.rendPokemon(result["pokemon"]);
        console.log(result["user"]);
        this.rendUser(result["user"]);
        console.log(result["friends"]);
        this.rendFriends(result["friends"]);
    }
}
