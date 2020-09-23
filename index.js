const {Client , Collection} = require('discord.js');
const bot = new Client();


const config = require('./config.json');

const prefix = '!!';

const fs = require('fs');

bot.commands = new Collection();
 
const commandFlies = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFlies){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}

bot.on('ready' , () =>{
    console.log('CBG status : online');
})

bot.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === "ping"){

       bot.commands.get('ping').execute(message , args); 

    }else if(command === "link"){

        bot.commands.get('linkDiscord').execute(message , args); 

    }else if(command === "play"){

        bot.commands.get('play').execute(message , args);             

    }else if(command === "memo"){

        bot.commands.get('memo').execute(message , args);             

    }else if(command === "event"){

        bot.commands.get('event').execute(message , args);             

    }else if(command === "dailynews"){

        bot.commands.get('dailyAnnouncements').execute(message , args);             

    }else if(command === "help"){

        bot.commands.get('help').execute(message , args);             

    }else{

        bot.commands.get('notYetDeveloped').execute(message , args);  

    }

});
bot.login(config.token);



