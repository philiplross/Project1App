//api key for song kick
var apiKey = "eXBGBqHJ9N9zfC95";

var artistId = "379603"
var getUrl = "https://api.songkick.com/api/3.0/artists/" + artistId + "/gigography.json?apikey=" + apiKey;

//ajax with firebase to call soundkick database

$.ajax({
    url: getUrl,
    method: "Get"
}).done(function (apiResponse) {
    //$( this ).addClass( "done" );
    var results = apiResponse.resultsPage.results.event;
    var mostRecent = results.slice(results.length - 11, results.length - 1)

    for (var i = 0; i <mostRecent.length; i++) {
        console.log(mostRecent[i].start.date);
    }
});

// {
//"resultsPage": {
//"results": {
//"type": [Array of response objects]
//},
// "totalEntries":10,
//"perPage":10,
//"page":1,
//"status":"ok"
//}
// }

//  {
//    "resultsPage": {
//      "results": {
//         "type": [
//           {
//             "displayName": "Artist",
//             "id": 379603,
//             "identifier": [
//               {
//                 "eventsHref": "http://api.songkick.com/api/3.0/artists/mbid:e21857d5-3256-4547-afb3-4b6ded592596/calendar.json",
//                 "href": "http://api.songkick.com/api/3.0/artists/mbid:e21857d5-3256-4547-afb3-4b6ded592596.json",
//                 "mbid": "e21857d5-3256-4547-afb3-4b6ded592596"
//               }
//             ],
//             "onTourUntil": null,
//             "uri": "http://www.songkick.com/artists/68043-gorillaz?utm_source=1976&utm_medium=partner"
//           }
//         ]
//       },
//       "status": "ok",
//       "perPage": 10,
//       "page": 1,
//       "totalEntries": 10
//     }
//   }
