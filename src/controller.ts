/* Controller
Guidelines for the controller:
Use the instances of your classes with MVC principles so that when the user clicks the generate user button, 
it will fetch and load the data on the screen  */


// EVENTS
console.log("hi");
const API = new api()

API.callAll().then((result) => {
    console.log(result);
})
