module.exports = {
    name: 'event',
    description: 'Anuncia o daily meeting',
    execute(message, args){

        var msg_ = message.content;
        var msg = msg_.split('"');

        var msgStr = msg_.split('/');

        var msgTime = msg_.split(':');
    
    
        //format !!event "xx/xx/xxxx yy:yy:yy"


        var sec = msgTime[2].substr(0,2);
        var min = msgTime[1].substr(0,2);
        var hour = msgTime[0].substr(20,2);
        var dayMonth = msgStr[2].substr(0,4);
        var month = msgStr[1];
        var dayWeek = "*"

        if(sec == '..') sec = "*";
        if(min == '..') min = "*";
        if(hour == '..') hour = "*";
        if(dayMonth == '..') dayMonth = "*";
        if(month == '..') month = "*";


        message.channel.send(msgStr[0].substr(9,2) + msgStr[1] + msgStr[2].substr(0,4))
        
        
      let scheduledMessage = new Cron.CronJob(sec + ' ' + min + ' ' + hour + ' ' + dayMonth + ' ' + month + ' ' + dayWeek, () => {
        // This runs every day at 10:30:00, you can do anything you want
        message.channel.send('@Everyone Boa noite! Daily meeting as 19:30');
      });

       // message.channel.send((Date.now() - data)/-1000);

       // message.channel.send(Date.prototype.getDay(data));  
    
   }
        
}