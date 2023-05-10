const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    var dogs = [
        'https://cutt.ly/ZpjRuHP',
        'https://cdn.discordapp.com/attachments/710805859562815488/731488956478128138/bunny.jpg',
        'https://cdn.discordapp.com/attachments/710805859562815488/731489086606671872/opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__04__lop-earred-rabbit-d47323a.jpg',
    
    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#f0f8ff")
        .setDescription(`Oh regarde, j'ai trouvé un lapin trop mignon :rabbit:`)
        .setImage(dogs[Math.floor(Math.random()*dogs.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'dogs'
};
