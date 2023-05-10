const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    NONE: "Normal",
    LOW: "Léger",
    MEDIUM: "Mitigé",
    HIGHT: "(╯°□°）╯︵ ┻━┻ (Compliqué)",
    VERY_HIGHT: "(ノಠ益ಠ)ノ彡┻━┻ (Difficile)"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setColor("#850ffa")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("**Noms:**", message.guild.name, inline)
    .addField("**Membres:**", `:bearded_person: ${message.guild.memberCount}`, inline)
    .addField("**ID:**", message.guild.id, inline)
    .addField("**Propriétaire:**", message.guild.owner, inline)
    .addField("**Niveau de Vérification:**", verlvl[message.guild.verificationLevel],inline)
    .addField("**Région:**", message.guild.region, inline)
    .addField("**Nombre de roles:**", message.guild.roles.cache.size, inline)
    .addField("**Nombre de channels:**", message.guild.channels.cache.size, inline)
    .addField("**Rejoin le:**", message.member.joinedAt)
    .addField(`**Créer le:**`, message.guild.createdAt)

    message.channel.send(serverembed);

}

module.exports.help = {
  name:"serverinfo"
}