// National Park Key
// VeZY3q7GAihGBDZlnOkWQTQVQByikWxWoXaTrQur

// $(document).ready(function() {
//
//
//     $.getJSON('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=VeZY3q7GAihGBDZlnOkWQTQVQByikWxWoXaTrQur', function(demo) {
//         document.getElementById('canvas').append(demo.data[0].weatherInfo);
//     });
// });




// $(document).ready(function() {
//
//     $('p').one('click', function() {
//         $.getJSON('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=VeZY3q7GAihGBDZlnOkWQTQVQByikWxWoXaTrQur', function(demo) {
//
//             document.getElementById('canvas_1').append(demo.data[0].weatherInfo + '\n' + demo.data[0].directionsInfo);
//
//         });
//     });
// });





$(document).ready(function() {
    $('button').one('click', function() {
        $.getJSON('https://developer.nps.gov/api/v1/parks?fields=images&sort=images&api_key=VeZY3q7GAihGBDZlnOkWQTQVQByikWxWoXaTrQur', function(demo) {
            // document.getElementById('report').append(demo.data[0].images[0].url);


            $('#report').append(demo.data[19].description + '   <br/>' + "<br/>" +
                demo.data[19].weatherInfo);

            $("#report") > $('<img/>').attr("src", demo.data[19].images[4].url).appendTo("#report");

        });
    });
});
