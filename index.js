const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = ("/");

bot.on('ready' , function() {
    console.log("je suis prêt à ètre utiliser.")
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur le serveur test bot .' + member.displayName)
    })
});


bot.login(process.env.TOKEN);
