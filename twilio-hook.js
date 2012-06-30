var hookio = require('hook.io');
var settings = require('./settings');
var twilioOptions = settings.twilio;
console.info(twilioOptions);
var twilio = require('./lib/twilio')(twilioOptions);

var twiliohook = hookio.createHook({ 
  "name": "twiliohook",
});

twiliohook.on('hook::ready', function(){
    twiliohook.on('sendSms', function(number,message){
        twilio.send({'number':number,'message':message,function(error,data){
            console.log("Message sent to " + number + ".");
        });
    });
});

myhook.start();
