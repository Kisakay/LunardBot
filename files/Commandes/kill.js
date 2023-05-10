const Discord = require("discord.js")
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = async (client, message, args) => {

  let killed = message.mentions.members.first();
  if (!killed) {
    let emb = new Discord.MessageEmbed()
      .setColor("#fd3612")
      .setDescription(`【${nope}】${message.author} il faux mentionné quelqu'un!`)

    return message.channel.send(emb)
  } else {
    let emb = new Discord.MessageEmbed()
      .setColor("#fd3612")
      .setDescription(`${killed} a été tué par ${message.author} 😓 | RIP`)

    return message.channel.send(emb)
  }
}
module.exports.help = {
  name: "kill"
}