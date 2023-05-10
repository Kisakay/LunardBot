const Discord = require("discord.js");
var casino = [
    ':star:',
    ':seven:',
    ':diamond_shape_with_a_dot_inside:',
    ':x:'
];

var casino2 = [
    ':star:',
    ':seven:',
    ':diamond_shape_with_a_dot_inside:',
    ':x:'
];

var casino3 = [
    ':star:',
    ':seven:',
    ':diamond_shape_with_a_dot_inside:',
    ':x:'
];
module.exports.run = async (client, message, args) => {
    
            const embed = new Discord.MessageEmbed()
            .setTitle(casino[Math.floor(Math.random()*casino.length)] + ' ' + casino[Math.floor(Math.random()*casino.length)] + ' ' + casino[Math.floor(Math.random()*casino.length)] + '\n' + casino2[Math.floor(Math.random()*casino2.length)] + ' ' + casino2[Math.floor(Math.random()*casino2.length)] + ' ' + casino2[Math.floor(Math.random()*casino2.length)] + '\n' + casino3[Math.floor(Math.random()*casino3.length)] + ' ' + casino3[Math.floor(Math.random()*casino3.length)] + ' ' + casino3[Math.floor(Math.random()*casino3.length)]) 
            return message.channel.send(embed);

}
        
