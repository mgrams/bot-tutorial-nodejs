var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /coming/,
      botRegexC = /Coming/,
      botRegex2 = /random meme/,
      botRegexStar = /binary/,
      botRegexStar2 = /quarks/;

  if(request.text && (botRegex.test(request.text) || botRegexC.test(request.text))) {
    this.res.writeHead(200);
    postMessageComing();
    this.res.end();
  }
  if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessageMeme();
    this.res.end();
  }
  if(request.text && (botRegexStar.test(request.text) || botRegexStar2.test(request.text))) {
    this.res.writeHead(200);
    postStarImage();
    this.res.end();
    } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessageComing() {
  var botResponse, options, body, botReq;

  botResponse = "and arriving";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}
function randomMeme() {
  a = Math.random() * 600;
    b = Math.random() * 600;
    c = Math.random() * 600;

    if (a < 101){
      str1 = "smol";
    }
    else if(a < 201){
      str1 = "Salty";
    }
    else if (a < 301)
    {
        str1 = "Triggered";
    }
    else if (a < 401)
    {
        str1 = "Nice";
    }
    else if (a < 501)
    {
        str1 = "Alpha";
    }
    else if (a <= 600)
    {
        str1 = "BUFF";
     }

    if (b < 101)
    {
        str2 = "engineers";
    }
    else if (b < 201){
        str2 = "Eric";
    }
    else if(b < 301){
      str2 = "NUGS";
    }
    else if (b < 401){
        str2 = "guys";
    }
    else if (b < 501)
    {
        str2 = "bees";
    }
    else if (b <= 600)
    {
        str2 = "yeast";
     }

    if (c < 101)
    {
        if (str2 == "Eric")
        {
            str3 = "is the worst.";
        }
        else {
            str3 = "are the worst.";
        }
    }
    else if (c < 201)
    {
        str3 = "rights activism";
    }
    else if (c < 301)
    {
        if (str2 == "Eric")
        {
            str3 = "finishes last";
        }
        else {
            str3 = "finish last";
            }
    }
    else if (c < 401)
    {
        str3 = "all my husbands";
    }
    else if (c < 501)
    {
        str3 = "dump";
     }
    else if (c <= 600)
  {
        if (str2 == "Eric"){
            str3 == "is a furry";
        }
        else{
            str3 = "are furries";
        }
    }

    random1 = Math.random() * 100;

    if (random1 < 71)
    {
        return str1 + " " + str2 + " " + str3;
    }
    else if (random1 < 85)
    {
        return "I'm " + str1 + " " + str2 + " kin";
    }
    else if (random1 <= 100)
    {
      return "Make "+ str2 + " " + str1 + " Again";
    }


}
function postMessageMeme() {
  var botResponse, options, body, botReq;

  botResponse = randomMeme();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function randomStar() {
   a = Math.random() * 300;
   if (a <= 100) {
       return "http://i68.tinypic.com/aau1js.jpg";
   } else if (a <= 200) {
       return "http://i64.tinypic.com/2qmfasj.jpg";
   } else {
      return "http://i65.tinypic.com/2z9ctmr.jpg";
   }
}
function postStarImage() {
  var botResponse, options, body, botReq;

  botResponse = randomStar();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : "star",
    "picture_url" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;
