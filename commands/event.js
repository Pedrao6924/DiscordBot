const {Client , Collection , MessageEmbed} = require('discord.js');
const Cron = require('cron');

module.exports = {
    name: 'event',
    description: 'Anuncia o daily meeting',
    execute(message, args){

      const embed = new MessageEmbed().setColor("0x7F00FF").setDescription("Fala tu")
        var msg_ = message.content;

        var msg = msg_.split('"');

        var msgStr = msg_.split('/');

        var msgTime = msg_.split(':');
    
    
        //format !!event "xx/xx/xxxx yy:yy:yy" "Sua mensagem aqui"



        var sec = msgTime[2].substr(0,2);
        var min = msgTime[1].substr(0,2);
        var hour = msgTime[0].substr(20,2);
        
        var dayMonth = msgStr[0].substr(9,2)
        var month = msgStr[1];
        var dayWeek = "*";

        
        if(sec == '..') sec = "*";
        if(min == '..') min = "*";
        if(hour == '..') hour = "*";
        if(dayMonth == '..') dayMonth = "*";
        if(month == '..') month = "*";

      let scheduledMessage = new Cron.CronJob(sec + ' ' + 
                                              min + ' ' + 
                                              hour + ' ' + 
                                              dayMonth + ' ' + 
                                              month + ' ' + 
                                              dayWeek, () => {
       

        message.channel.send(msg[3]);
        message.author.send(embed);

        scheduledMessage.stop();
        
      });

      scheduledMessage.start(); //inicia a task
      //scheduledMessage.stop();  //pausa a task
                                //usados juntos eles garantem que a task é realizada apenas uma vez

   }
        
}