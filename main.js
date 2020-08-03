const Discord = require('discord.js');

const client = new Discord.Client();
const sweenyWords = ["SYDNEY SWEENEY", "SWEENEY", "SYDNEY",'SYD'];

client.on('ready', () => {
    console.log('SweeneyBot is ready');
});
client.on('message', message => {
    
    if (checkSweeney(message.content)) {
        const attachment = new MessageAttachment('https://tenor.com/view/sydney-sweeney-sydney-sweeney-euphoria-ice-cream-gif-14906880');
      message.channel.send(attachment);
    }
});
  

function checkSweeney(message) {
    for (let i = 0; i < sweenyWords.length; i++){
        if (message.toUpperCase() === sweenyWords[i]) {
            return true;
        }
            
    }
    
}

client.login(process.env.BOT_TOKEN);