const Discord = require('discord.js');

const client = new Discord.Client();
const sweenyWords = ["SYDNEY SWEENEY", "SWEENEY", "SYDNEY",'SYD', 'SIDNI', 'SDYNEY' ];

client.on('ready', () => {
    console.log('SweeneyBot is ready');
});
client.on('message', message => {
    
    if (checkSweeney(message.content)) {
        rnd = Math.floor(Math.random() * 101); 
        if(rnd < 50)
            message.channel.send('https://tenor.com/view/sydney-sweeney-sydney-sweeney-euphoria-ice-cream-gif-14906880');
        if (rnd > 50)
            message.channel.send('https://tenor.com/view/euphoria-cassie-howard-sydney-sweeney-hat-tongue-out-gif-14754462');
    }
    if (message.content.includes('!jen')) {
        message.channel.send('https://i.redd.it/sywglt58ngg01.jpg');
    }
});
  

function checkSweeney(msg) {
    if (msg.includes('https://'))
        return false;
    else{
        for (let i = 0; i < sweenyWords.length; i++) {
            if (msg.toUpperCase().includes(sweenyWords[i])) {
                return true;
            }
        }
    }
    return false;
}

client.login(process.env.BOT_TOKEN);