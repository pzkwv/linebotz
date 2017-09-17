
var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1535638171',
    channelSecret: 'a18a11d5dbb43545cdd0a3b09f6fc694',
    channelAccessToken: 'rG7mdNUio6XgPflYVmEE8IiAS5VrEDKtlVIbOUYA+hDW40mczFESzAzO9kEiazIl7Q9kA8c+s/XlkD7yx8XdJ/dlMkBX30vawQZ7NLcCulguDPwCFqtzQsTGWFO9fPm72RLGl/8UDoWhyGT4dRNI/wdB04t89/1O/w1cDnyilFU='
});
 
bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
console.log('node start');