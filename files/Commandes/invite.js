const Discord = require('discord.js');
module.exports.run = (client, message, args) => {

    const embed = new Discord.MessageEmbed()
            .setColor("#00ffb8")
            .setTitle('Invite Me')
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'invite'
};