const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.MessageEmbed()
    .setColor("#721606")
    .setDescription(`Oh regarde, j'ai trouvé un chien mignon :dog:`)
    .setImage(body.url)
    .setTimestamp()

    message.channel.send(embed)
}
module.exports.help = {
  name: "dogs"
}