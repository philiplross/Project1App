//Make API call via JQuery (AJAX).

function tubeIt(artist = 'lilwayne live')
{
var encodedURI = encodeURI(artist);
console.log("encoded URI ", encodedURI);
 $.ajax({
url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBU3AMbULUTX2MHThg4EzAQ8MiIF0AU0JI&q="+encodedURI+"live",
method: 'GET'
})
.done (function player (results){
//get rid of the loaders

console.log("results.items from YouTube api: ",results.items);   
var videos = results.items; 
for(i = 0;i<videos.length;i++) {
$('.ylist').append('<li><iframe id="player" type="text/html" width="640" height="390"   src="https://www.youtube.com/embed/'+videos[i].id.videoId +'?enablejsapi=1" frameborder="0"></iframe></li>')
}
});
}


//Take results and put in the iframe..


//Create a function for for loop..call anything.
