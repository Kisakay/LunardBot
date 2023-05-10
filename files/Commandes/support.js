const Discord = require('discord.js');
module.exports.run = (client, message, args) => {

    const embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .setTitle('Click Here')
            .setURL('https://discord.gg/XsefQuC')
    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'support'
};
