const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    var dogs = [
        'https://giphy.com/gifs/flex-IID83ktOyafRu',
        'https://i.pinimg.com/736x/66/1f/d7/661fd730fe63f3e46ef310857c3b9741.jpg',
        'https://i.gifer.com/DXwD.gif',
        'https://media.giphy.com/media/xo6QL3gjGMimA/giphy.gif',

    ];

    const embed = new Discord.MessageEmbed()
        .setColor("#b5efab")
        .setDescription("`"+message.author.username+ `\` Flex ! 🤣`)
        .setImage(dogs[Math.floor(Math.random()*dogs.length)])
        .setTimestamp()

    return message.channel.send(embed);    
};

module.exports.help = {
    name: 'flex'
};
