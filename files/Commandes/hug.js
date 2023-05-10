const Discord = require('discord.js');
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = (client, message, args) => {
    let kiss = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!kiss) return message.reply(`【${nope}】 Je n'ai pas trouvé d'utilisateur.`);
    var hug = [
        'https://cdn.discordapp.com/attachments/716491138277703691/717819521876099162/hug1.gif',
        'https://cdn.discordapp.com/attachments/716491138277703691/717819675076984842/hug2.gif',
        'https://cdn.discordapp.com/attachments/716491138277703691/717819860104511578/hug3.gif'

    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#2dfbeb")
        .setDescription("<@"+message.author+ `> a fait un calin à <@${kiss.id}> !`)
        .setImage(hug[Math.floor(Math.random()*hug.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'hug'
};
