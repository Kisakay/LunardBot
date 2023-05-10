const Discord = require("discord.js");
const oki = ":white_check_mark:"
const nope = ":x:";

module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {return message.channel.send(`【${nope}】 Vous n'avez pas les permissions !`); }
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: true });
    const embed = new Discord.MessageEmbed()
      .setColor("#5b3475")
      .setTimestamp()
      .setDescription(`【${oki}】Le channel a été unlock avec succès !`);
    return message.channel.send({embed});  
}

module.exports.help = {
  name: "unlock"
}