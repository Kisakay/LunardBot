const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
    // Vérification
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send("【:regional_indicator_x:】 Vous n'avez pas les permissions pour faire cela !");
    }
    if (!args[0]) return message.channel.send("【:regional_indicator_x:】 Merci indiquer ta question ...");

    const pollEmbed = new Discord.MessageEmbed()
    .setTitle("__**Sondage**__: \`"+ message.author.username+ "\`")
    .setColor("#ddd98b")
    .setDescription(args.join(' '))
    .addField('Appuyez sur les réactions ci-dessous.⬇', ":white_check_mark:: **Oui**\n :x:: **Non** ")
    .setImage("https://cdn.discordapp.com/attachments/610152915063013376/610947097969164310/loading-animation.gif")
    .setTimestamp()

    let msg = await message.channel.send(pollEmbed);

    await msg.react('✅');
    await msg.react('❌');

};

module.exports.help = {
    name: 'poll'
};