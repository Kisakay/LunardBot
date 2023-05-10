const Discord = require('discord.js');
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = (client, message, args) => {
    var slap = [
        'https://cdn.discordapp.com/attachments/717813924203855882/717982041899139152/slap1.gif',
        'https://cdn.discordapp.com/attachments/717813924203855882/717982255661711381/slap2.gif',
        'https://cdn.discordapp.com/attachments/717813924203855882/717982464299106314/slap3.gif'

    ];
    let kiss2 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!kiss2) return message.reply(`【${nope}】 Je n'ai pas trouvé d'utilisateur.`);

    const embed = new Discord.MessageEmbed()
        .setColor("#42ff08")
        .setDescription("<@"+message.author+ `> a giflé <@${kiss2.id}> !`)
        .setImage(slap[Math.floor(Math.random()*slap.length)])
        .setTimestamp()
    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'slap'
};
