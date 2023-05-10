const Discord = require('discord.js');
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = (client, message, args) => {
    let kiss2 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!kiss2) return message.reply(`【${nope}】 Je n'ai pas trouvé d'utilisateur.`);

    var kiss = [
        'https://cdn.discordapp.com/attachments/600751265781252149/613486150002278630/tenor-4.gif',
        'https://cdn.discordapp.com/attachments/600751265781252149/613486548561952788/tenor-5.gif',
        'https://cdn.discordapp.com/attachments/717813904046293063/717818490601603072/kiss1.gif',
        'https://cdn.discordapp.com/attachments/717813904046293063/717818780910223410/kiss2.gif'

    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#ff0884")
        .setDescription("<@"+message.author+ `> a fait un bissou à <@${kiss2.id}> !`)
        .setImage(kiss[Math.floor(Math.random()*kiss.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'kiss'
};
