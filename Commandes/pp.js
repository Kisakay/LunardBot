const Discord = require("discord.js");
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send(`【${oki}】En cours de chargement...`);

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()

        .setImage(mentionedUser.avatarURL({ format: 'png', dynamic: true, size: 512 }))
        .setColor("#add5ff")
        .setTitle("__**Avatar**__: \`"+ mentionedUser.username+ "\`")
        .setDescription("Voici son avatar:!help g")
        .setTimestamp()

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}