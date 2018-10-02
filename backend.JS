function songkickGo (artistId = 'awolnation')

//api key for song kick
var apiKey = "eXBGBqHJ9N9zfC95";

var artistId = "2489666"
var getUrl = "https://api.songkick.com/api/3.0/artists/" + artistId + "/gigography.json?apikey=" + apiKey + "&order=desc";



$.ajax({
    url: getUrl,
    method: "Get"
}).done(function (apiResponse) {
    var results = apiResponse.resultsPage.results.event;
    var results = apiResponse;
   // var mostRecent = results.slice(results.length - 11, results.length - 1)
    var mostRecent = results.fullLength;
for(i=0; i<results.length; i++) {
    $('.songkickTable').append('')
}

    //for (var i = 0; i <mostRecent.length; i++) {
    console.log(mostRecent[i].start.date);
   }

   console.log(apiResponse);
});

var movie = "The Little Mermaid";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var tBody = $("tbody");
      var tRow = $("<tr>");
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      tBody.append(tRow);
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
