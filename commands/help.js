module.exports = {
    name: 'help',
    description: 'Lembrar de eventos',
    execute(message, args){

        var msg_ = ""
            msg_ = message.content;

        if(msg_.search("linkDiscord") != -1){

            message.channel.send("Manda o link do discord da CBG")

        }else if(msg_.search("event")!= -1){


            message.channel.send("formato - !!event" + ' "' +"31/12/2020 24:60:60" + '"')
     

        }else{
            //NO CASO DE !!help

            message.channel.send("Digite um comando apos o !!help")


        }
    }
}