const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Sweeny Bot is ready');
});
client.on('message', message => {
    
    if (message.content === 'ping') {
      
      message.channel.send('https://tenor.com/view/sydney-sweeney-sydney-sweeney-euphoria-ice-cream-gif-14906880');
    }
});
  



client.login(process.env.BOT_TOKEN);