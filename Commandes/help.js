const Discord = require('discord.js');
const yesdev = "<:correct:724999542528933899>";
module.exports.run = (client, message, args) => {

    const og_embed = new Discord.MessageEmbed().setColor("#0276bd")
    //help mod
        og_embed.setDescription(`**Help Moderation**`)
        og_embed.addField('**Modération**: <:banhammer:725002615833886801>', '`?ban, ?kick, ?clear, ?tempmute, ?unmute, ?serverinfo, ?unban`')
    //help mc
    og_embed.setDescription(`**Help Minecraft Server Status**`)
    og_embed.addField('**Minecraft Status**: <:minecraft:730688428592726066>', '`?server <ip:port>`')
    //help xp
    og_embed.setDescription(`**Help XP (Level)**`)
    og_embed.addField('**XP**: :moneybag:', '`?xp`')
    //help fun
    og_embed.setDescription(`**Help Fun**`)
    og_embed.addField('**Fun**: :tada:', '`?kiss, ?slap, ?hug, ?say,\n ?question, ?poll, ?cats, ?dogs, ?bunny, ?hack, ?pp, ?stats, ?blc, ?flex, ?casino, ?morse, ?hastebin, ?kill`')
    //help giveaway
    og_embed.setDescription(`**Help Giveaway**`)
    og_embed.addField('**Giveaway**: :tada:', '`?start #channel <time h/d/m> <winner> <prize>, ?end <message id>, ?reroll <message id>`')
    //help bot
    og_embed.setDescription(`**Help Bot**`)
    og_embed.addField('**Bot**: <:toolshammer:725004102441893898>', '`?ping, ?status, ?support, ?invite, ?botinfo, ?serverinfo`')
    //help protect
    og_embed.setDescription(`**Help Protection**`)
    og_embed.addField('**Bot**: <:protectionlunard:733307394192572476>', '`?lock, ?unlock, ?lockall`')

    switch (arg[0]) {
        case "":
            break;
        default:
            break;
    }

    const embed = new Discord.MessageEmbed()
        .setColor("#0276bd")
        .setDescription(`Voici le menu "**Help**"`)
        .setThumbnail('https://cdn.discordapp.com/attachments/745636030337515563/745637431033987102/original.gif')
        .setAuthor('Project by Lunard Team', 'https://cdn.discordapp.com/attachments/726150449161306133/731579071812730920/djs.png')
        .setTitle('Invite Me')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
        .addField('Help Modération: 👮‍♀️', '?help mod')
        .addField('Help Giveaway: 🎉', '?help giveaway')
        .addField('Help Fun: 🎆', '?help fun')
        .addField('Help Bot: 🤖', '?help bot')
        .addField('Help Protect: <:protectionlunard:733307394192572476>', '?help protect')
        .addField('Help Xp: 🪀', '?help xp')
        .addField('Help Minecraft Server Status: 🛹', '?help mc')
        .setTimestamp()
        .setFooter("Lunard Bot v2", 'https://cdn.discordapp.com/attachments/745636030337515563/745637431033987102/original.gif')
    return message.channel.send(embed);
};

module.exports.help = {
    name: 'help'
};