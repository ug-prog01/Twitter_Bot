console.log("5th vid");

let Twit = require('twit');

let init = require('./init');

let T = new Twit(init);

// T.get('search/tweets', { q: 'beach', count: 3 }, getData);
//
// function getData(err, data, response) {
//   let tweet = data.statuses;
//   for(let i = 0; i < tweet.length; i++) {
//     console.log(tweet[i].text);
//   }
// }

//set up a stream
let stream = T.stream('user');

//anytime someone follows 'user'
stream.on('follow', followed)//followed : callback

function followed(eveMsg) {
  let user_name = eveMsg.source.screen_name;
  putTweet('@' + user_name + ' It works!');
}

//post
//setInterval(tweetIt, 1000*60*60);//1000 = 1 sec

function putTweet(txt) {
  let tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, putData);

  function putData(err, data, response) {
    if (err) {
      console.log(err);
      console.log("Oops!");
    } else {
      console.log("It works!");
    }
  }
}
