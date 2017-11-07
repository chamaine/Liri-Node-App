
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






// console.log('Run Test Now');
// console.log(process.argv);
// console.log(process.argv[4]);
// console.log(Array.isArray(process.argv));

// if (process.argv[2]  === 'cats') {
// console.log('night');


// }

// if (process.argv[4] ==='city') {
// 	console.log('city');
// }
// //    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

