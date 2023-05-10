const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    var dogs = [
        'https://cdn.discordapp.com/attachments/731536643563061298/731836667945549874/5e98ab46316e9.image.jpg',
        'https://cdn.discordapp.com/attachments/731536643563061298/731836821272658001/5e98ab46316e9.image.jpg',
        'https://cdn.discordapp.com/attachments/731536643563061298/731836994522578965/1_ZoOlQLNrOW2729miRvO1sw.jpeg',
        'https://cdn.discordapp.com/attachments/731536643563061298/731837097396142120/5e98ab46316e9.image.jpg',
        'https://cdn.discordapp.com/attachments/731536643563061298/731837269597487175/Red-fox-winter-South-China-4-Hal-Winters.jpg',
        'https://cdn.discordapp.com/attachments/731536643563061298/731837404931162132/a_03a5faeecd3386a4beac51108623167a.jpg'
    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#f9d342")
        .setDescription(`Oh regarde, j'ai trouvé un renard :fox:`)
        .setImage(dogs[Math.floor(Math.random()*dogs.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'fox'
};
