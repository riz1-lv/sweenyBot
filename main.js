const Discord = require('discord.js');

const client = new Discord.Client();
const sweenyWords = ["SYDNEY SWEENEY", "SWEENEY", "SYDNEY",'SYD'];

client.on('ready', () => {
    console.log('SweeneyBot is ready');
});
client.on('message', message => {
    
    if (checkSweeney(message.content)) {
        
      message.channel.send('https://tenor.com/view/sydney-sweeney-sydney-sweeney-euphoria-ice-cream-gif-14906880');
    }
    if (message.content === '!jennifer') {
        message.channel.send('https://i.imgur.com/PtJvF3Q.jpg');
    }
});
  

function checkSweeney(msg) {
    for (let i = 0; i < sweenyWords.length; i++){
        if (msg.toUpperCase() === sweenyWords[i]) {
            return true;
        }
            
    }
    return false;
}

client.login(process.env.BOT_TOKEN);