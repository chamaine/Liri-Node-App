var twitterPackage =("twitter");

var twitterKeys = {
  consumer_key: '2gb9sk1YADZReETCTIxyMhnfF',
  consumer_secret: 'Eszbo8ZAC4QV1iJonecwPEJjSGjjcLNvrKSdMRv3UlEBgOZmsb',
  access_token_key: 'https://api.twitter.com/oauth/access_token',
  access_token_secret: 'ITOwG6ldPwmZHJMXTxHwrGWPAVRPpykUzixXzuAGvX7CX',
}

module.exports = twitterKeys;



Twitter.stream('statuses/filter', {track: '#oakland'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
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

