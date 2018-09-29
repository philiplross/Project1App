//api key for song kick
var apiKey = "eXBGBqHJ9N9zfC95";

var artistId = "379603"
var getUrl = "https://api.songkick.com/api/3.0/artists/" + artistId + "/gigography.json?apikey=" + apiKey;

//ajax with firebase to call soundkick database

$.ajax({
    url: getUrl,
    method: "Get"
  }).done(function(apiResponse) {
    //$( this ).addClass( "done" );
    console.log(apiResponse);
  });

  {
"apiResponse": {resultspage},


  }

  .then(function(response))
apiResponse {}

function get_User_Data(User_ID) {
    var gotUserData = $.Deferred();

    var userName, userLastCheckIn;

    $.ajax({
        dataType: "json",
        url: DataLocation + '/USERS/' + User_ID + '.json',
        type: "GET",

        success: function (data) {
            if (data != null) {
                userData = data;
                // console.log(userData);
                userName = data['Username'];
                userLastCheckIn = data['CheckIn'];
            }
        },

    }).always(function () {
        userInfo = [userName, userLastCheckIn];
        gotUserData.resolve();
    });

    return $.Deferred(function (def) {
        $.when(gotUserData).done(function () {
            def.resolve();
        });
    });
}