const Discord = require("discord.js")
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = async (bot, message, args) => {

   if(!args[1]) return message.reply(`【${nope}】 Entrez une question complète avec 2 mots ou plus !`);
   let reponse = ["Oui.", "Non.", "Je ne sais pas.", "Je ne suis pas sûr !", "Ta crue !", "Je ne suis pas sûr !", "Non merci !", "Oui.", "Oui.", ];

   let result = Math.floor((Math.random() * reponse.length));
   let question = args.join(" ");

   const embed = new Discord.MessageEmbed()
   
   .setTitle("__**Question**__: \`"+ message.author.username+ "\`")
   .setColor("#ddd98b")
   .addField(":question:__**Question**__", question)
   .addField(":grey_exclamation:__**Réponse:**__", reponse[result])
   .setTimestamp()

   message.channel.send(embed)

   message.delete();


}

   module.exports.help = {
       name: "question"
   }