const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    var dogs = [
        'https://cdn.discordapp.com/attachments/600751265781252149/613480454661734400/ZD6Kt4.gif'

    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#ffdab9")
        .setDescription("`"+message.author.username+ `\` s'ent bas les couilles ! x)`)
        .setImage(dogs[Math.floor(Math.random()*dogs.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'blc'
};
