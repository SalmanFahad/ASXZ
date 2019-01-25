const Discord = require('discord.js');
let tokens = ["NTA0NDcxODEwNjUwNDA2OTI5.DyuYyA.fFnX1fLz28UIP2xXkUPW-IU_Wx4"];
for (let i = 0; i < tokens.length; i++) {
    // clients.push('token', tokens[i]);
    let client = new Discord.Client();
    client.login(tokens[i]);
    client.on('ready', () => {
        let IDROOM = '532369268344487936';
        let channel = client.channels.get(IDROOM);

        // npm install ffmpeg-binaries opusscript discord.js --save

        if (channel.type == 'voice') {
            channel.join().then(con => {
                    console.log('I have successfully connected to the channel!');
                })
                .catch(console.log);
        } else {
            console.log(`[${client.channels.get(channel.id).name} || ${channel.id}] .. is not a voice channel`);
        };
    });
};