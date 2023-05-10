const Discord = require('discord.js');
const client = new Discord.Client();
const oki = ":white_check_mark:";
const nope = ":x:";
const lock = ":closed_lock_with_key:";
const unlock = ":unlock:";

module.exports.run = async (client, message, args) => {
  
  
    if (message.channel.permissionsFor(message.author.id).has("MANAGE_CHANNELS") === false) { 
      const embed = new new Discord.MessageEmbed()
        .setColor("#5b3475")
        .setTimestamp()
        .setDescription(`【${nope}】Vous n'avez pas la permission de faire ceci.`);
      return message.channel.send({embed});  
    }  
  
    message.guild.channels.cache.forEach(c => {
      c.createOverwrite(message.guild.id, { SEND_MESSAGES: false })
        })
        const Lockembed = new Discord.MessageEmbed()
      .setColor("#5b3475")
      .setTimestamp()
      .setDescription(`【${oki}】Tous les channels ont été locks par <@${message.author.id}>.`);
      return message.channel.send(Lockembed)
    } 
      
      
  