"use strict";
/* Controller
Guidelines for the controller:
Use the instances of your classes with MVC principles so that when the user clicks the generate user button,
it will fetch and load the data on the screen  */
// EVENTS
const API = new api();
const rend = new render();
// When first loading the page
API.callAll().then((result) => {
    rend.rendAll(result);
});
// When pressing the Generate User button
$("#genUser").on("click", function () {
    API.callAll().then((result) => {
        rend.rendAll(result);
    });
});
