
var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1535638171',
    channelSecret: 'a18a11d5dbb43545cdd0a3b09f6fc694',
    channelAccessToken: 'rG7mdNUio6XgPflYVmEE8IiAS5VrEDKtlVIbOUYA+hDW40mczFESzAzO9kEiazIl7Q9kA8c+s/XlkD7yx8XdJ/dlMkBX30vawQZ7NLcCulguDPwCFqtzQsTGWFO9fPm72RLGl/8UDoWhyGT4dRNI/wdB04t89/1O/w1cDnyilFU='
});


bot.on('message', function(e) {
    console.log(e);
    var utmgif = '<script type="text/javascript" src="https://testads.ad2iction.com/m/adUrl/custom/gframe/utmgif.js" id="fxGA" fname="xxx" fserial="xxx" pname=""></script><script>gs("/進站")</script>';
    var ga = '';

    if(e.type == 'message' && e.message.type == 'text'){
        var txt = e.message.text.toLowerCase();
        if(txt.indexOf('/') != 0){
            return;
        }
        var q = e.reply;
        switch(txt){
            case '/ga-inapp':
                q(utmgif).then(function (){}).catch(function (error){console.log('reply error: ' + txt);});
                break;
            case '/ga-cont':
                break;
        }
    }

});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
console.log('robot start');


// {
//     type: 'message',
//     replyToken: '4a1e4195bdeb4515b68b7ca0178db883',
//     source: 
//         { userId: 'Ud0ad16cde89d20964bec951d174b7e0d',
//         type: 'user',
//         profile: [Function] },
//     timestamp: 1505641415844,
//     message: 
//         { type: 'text',
//         id: '6709785507649',
//         text: 'try',
//         content: [Function] },
//     reply: [Function] 
// }