// var obj = {
//
//     "name": "John",
//     "age": 30,
//     "cars": ["Ford", "BMW", "Fiat", "Audi"],
//
//
//     "city": "St. Louis",
//     "state": "MO",
//     "vin": 76543
// }
//
// function list() {
//     var cars = ["Ford", "BMW", "Fiat", "Audi"];
//     var citrus = obj.cars[3];
//     document.write(citrus + " " + obj.name + " " + obj.city);
//
//
//     setTimeout(function() {
//         document.body.style.backgroundColor = "pink";
//     }, 2000);
//     $('body').animate({
//         'opacity': 1,
//         'duration': 3000
//     });
//
// }

// key  ca1fc0043ee92d7b85772c03c4e9a10b


$(document).ready(function() {


    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Saint%20Louis&APPID=ca1fc0043ee92d7b85772c03c4e9a10b', function(trying) {
        document.write(trying.name +
            '</br>');
        document.write(trying.weather[0].description);
    });
});
