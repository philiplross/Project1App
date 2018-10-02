//Make API call via JQuery (AJAX).

results = $.ajax({
url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBU3AMbULUTX2MHThg4EzAQ8MiIF0AU0JI&q=lilwayne",
method: 'GET'
});

//Run success ajax function csll for loop func inside success block

//Grab 'items' and 'snippets' code.

console.log(results);

//Take results and put in the iframe..


//Create a function for for loop..call anything.
function player(results){
for(i = 0;i<5;i++) {
$('.ylist').append('<li><iframe id="player" type="text/html" width="640" height="390"   src="http://www.youtube.com/embed/'+results.responseJSON.items[i].id.videoId +'?enablejsapi=1" frameborder="0"></iframe></li>')
}};