const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = (client, message, args) => {
    const oki = ":white_check_mark:"
    const nope = ":x:";
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {return message.channel.send(`【${nope}】 Vous n'avez pas les permissions !`); }
    let messageToBot = args.join(" ");
    message.delete().catch();
    message.channel.send(messageToBot);
};

module.exports.help = {
    name: 'say'
};
