const Discord = require('discord.js');

const client = new Discord.Client();
const sweenyWords = ["SYDNEY SWEENEY", "SWEENEY", "SYDNEY",'SYD', 'SIDNI', 'SDYNEY' ];

client.on('ready', () => {
    console.log('SweeneyBot is ready');
});
client.on('message', message => {
    
    if (checkSweeney(message.content)) {
        rnd = Math.floor(Math.random() * 101); 
        if (rnd >= 50) {
            message.channel.send('https://tenor.com/view/sydney-sweeney-sydney-sweeney-euphoria-ice-cream-gif-14906880');
        }
         if (rnd < 50 && rnd > 25) {
            message.channel.send('https://tenor.com/view/euphoria-cassie-howard-sydney-sweeney-hat-tongue-out-gif-14754462');
       }
        if (rnd <= 25) {
            message.channel.send('https://tenor.com/view/hey-you-how-you-doing-lets-go-dance-cheerleader-gif-15098613');
        }
    }
    if (message.content.includes('!jen')) {
        message.channel.send('https://i.redd.it/sywglt58ngg01.jpg');
    }
    if (message.content.includes('!bren')) {
        message.channel.send('https://i.redd.it/75qvogprud341.jpg');
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let oldVoice = oldState.channelID;
    let newVoice = newState.channelID;
    const channel = client.channels.cache.get('CHANNEL ID');
    if (oldVoice != newVoice) {
        if (oldVoice == null) {
            client.on('message', message => { message.channel.send(`User Joined`); });
            console.log("user joined")
        }
        else if (newVoice == null) {
            console.log('user left')
        }
        else {
            console.log(`User left switced Channels`);
        }
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

//client.login(process.env.BOT_TOKEN);
client.login('NzM5OTUzMjcwMTg5MDY0NDAz.Xyh9Lw.-anY1SB7nPwLClqoq58LviK08Ck');