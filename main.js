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
    if (message.content.includes('!l')) {
        message.channel.send('https://tenor.com/view/jason-sleeping-bag-gif-12792005');
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    const lastMessageChannel = oldState.member.lastMessageChannelID;
    var channel = oldState.member.guild.channels.cache.find(channel => channel.id === lastMessageChannel)
    let oldVoice = oldState.channelID;
    let newVoice = newState.channelID;
    if (channel != null) {
        if (oldVoice != newVoice) {
            if (oldVoice == null) {
                channel.send(`${newState.member.nickname} has joined ${newState.channel.name}`, { tts: true });
                console.log('user joined')

                setTimeout(deleteLast, 4000, channel);
            }
            else if (newVoice == null) {
                channel.send(`${newState.member.nickname} has left ${oldState.channel.name}`, { tts: true });
                console.log('user left');
                setTimeout(deleteLast, 4000, channel);
            }
            else {
                channel.send(`${newState.member.nickname} switched from ${oldState.channel.name} to ${newState.channel.name} `, { tts: true });
                console.log(`user switced Channels`);
                setTimeout(deleteLast, 4000, channel);
            }
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
function deleteLast(channel) {
    channel.messages.fetch(client.user.lastMessageID).then(msg => msg.delete());
}
//client.login(process.env.BOT_TOKEN);
client.login('NzM5OTUzMjcwMTg5MDY0NDAz.Xyh9Lw.whorpJ5Lgkrd6rxzI01I8X0_hqU');