console.log("APP.JS IS LOADED");

fetch("magazines.json")
    .then(response => response.json())
    .then(data => {
        console.log("JSON LOADED");
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
