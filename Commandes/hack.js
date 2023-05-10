const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    let kiss = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!kiss) return message.channel.send(`【${nope}】 Je n'ai pas trouvé d'utilisateur.`);
    var ip = [
        '1',
        '100',
        '168',
        '254',
        '345'

    ];
    var Email = [
        'iloveloli@gmail.com',
        'p0rnisth3b3st@gmail.com',
        'zckz0ck@gmail.com',
        'bruhmoment@gmail.com'

    ];
    var mdp = [
        'sxmfg22',
        'pifpaf44',
        'ursoxko332',
        'password223',
        'roblox556'

    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#800000")
        .setDescription("`"+message.author.username+ `\` a hack <@${kiss.id}> !`)
        .addField("IP:", `\`${ip[Math.floor(Math.random()*ip.length)]}.${ip[Math.floor(Math.random()*ip.length)]}.${ip[Math.floor(Math.random()*ip.length)]}.${ip[Math.floor(Math.random()*ip.length)]}\``)
        .addField("Email:", `\`${Email[Math.floor(Math.random()*Email.length)]}\``)       
        .addField("Mots de Passe:", `\`${mdp[Math.floor(Math.random()*mdp.length)]}\``) 
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'hack'
};
