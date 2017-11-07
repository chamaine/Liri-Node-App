
var keys = require("./keys.js");
var Twitter = require("twitter");


var client = new Twitter(keys);




client.get('statuses/user_timeline', {screen_name: 'chamainew'}, function(error, tweets, response) {
    for (var i = 0; i <tweets.length; i++) {
        console.log(tweets[i].text);

    }



 
});

// //    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

