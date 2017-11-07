
var keys = require("...");
var Twitter = require("twitter");


var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});



var params = {screen_name: 'chamainew'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



// //    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

