//api key for song kick
//eXBGBqHJ9N9zfC95

var getUrl = https://api.songkick.com/api/3.0/artists/{artist_id}/gigography.json?apikey={eXBGBqHJ9N9zfC95}

//ajax with firebase to call soundkick database

$.getJSON("https://api.songkick.com/api/3.0/events.json?location=clientip&apikey={your_api_key}&jsoncallback=?",
  function(data) {
    // data is JSON response object
  });

function get_User_Data(User_ID) {
    var gotUserData = $.Deferred();

    var userName, userLastCheckIn;

    $.ajax({
        dataType: "json",
        url: DataLocation + '/USERS/' + User_ID + '.json',
        type: "GET",

        success: function(data) {
            if(data != null) {
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