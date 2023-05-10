const Discord = require('discord.js');
const ms = require("ms");
const oki = ":white_check_mark:"
const nope = ":x:";

module.exports.run = async (client, message, [time, reason]) => {
  if (!client.lockit) { client.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply(`【${nope}】Vous n'avez pas spécifié de temps.`); }

  const Lockembed = new Discord.MessageEmbed()
    .setColor("#5b3475")
    .setTimestamp()
    .setDescription(`【${oki}】Le channel a été lock par <@${message.author.id}> pendant ${time}.`);
    if (reason != null) { Lockembed.addField("Raison : ", reason); }
    
    const Unlockembed = new Discord.MessageEmbed()
    .setColor("#5b3475")
    .setTimestamp()
    .setDescription(`【${oki}】 Le channel a été unlock par <@${message.author.id}>.`);

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    const embed = new Discord.MessageEmbed()
      .setColor("#5b3475")
      .setTimestamp()
      .setDescription(`【${nope}】Vous n'avez pas la permission de faire ceci.`);
    return message.channel.send({embed});  
  }  
  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["ld", "lock"],
  permLevel: 2,
  botPerms: ["MANAGE_ROLES", "EMBED_LINKS", "ADMINISTRATOR"]
};