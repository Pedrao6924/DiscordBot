const Cron = require('cron');

module.exports = {
    name: 'dailyAnnouncements',
    description: 'Anuncios do dia',
    execute(message, args){


      let scheduledMessage = new Cron.CronJob('00 00 19 * * 1-5', () => {
        // This runs every day at 10:30:00, you can do anything you want
        message.channel.send('@Everyone Boa noite! Daily meeting as 19:30');
      });

      let scheduledMessage_1 = new Cron.CronJob('00 00 21 * * 1-5', () => {
        // This runs every day at 10:30:00, you can do anything you want
        message.channel.send('@Everyone Bora dar um break pessoal? Voltams as 21:20');
      });

      let scheduledMessage_2 = new Cron.CronJob('00 30 22 * * 1-5', () => {
        // This runs every day at 10:30:00, you can do anything you want
        message.channel.send('@Everyone Tenham um otimo fim de noite. Não esqueçam de apontarem suas horas no redmine!!!');
      });

      scheduledMessage.start();
      scheduledMessage_1.start();
      scheduledMessage_2.start();


   }
        
}