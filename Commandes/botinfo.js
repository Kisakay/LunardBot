const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.cache.size
    let chansize = bot.channels.cache.size
    let servsize = bot.guilds.cache.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#73947d")
    .setThumbnail(bicon)
    .addField("Mon Noms", `:robot: ${bot.user.username}`, inline)
    .addField("Mes Fondateurs", ":tada: <@740020616199012405>, <@745758140829794404>", inline )
    .addField("Mes Serveurs:", `:slot_machine: ${servsize}`, inline)
    .addField("Mes Salons:", `:open_file_folder: ${chansize}`, inline)
    .addField("Mes Amis:", `:sparkling_heart: ${usersize}`, inline)
    .addField("Ma Librairie:", "<:djs:731534041056280687> Discord.js", inline)
    .addField("Créer le:", bot.user.createdAt)
    .setFooter(`${bot.user.username}, by Lnd Team`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}