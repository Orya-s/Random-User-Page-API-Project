/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery). 
*/


// RENDER

class render {

   
    constructor() {
    }

    rendQuote(quote:any) {    // ye quote
        const source = $('#ye-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(quote); 
        
        // append our new html to the page
        $('.quote-container').append(newHTML);
    }
}

