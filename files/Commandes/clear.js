const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send(`【${nope}】 Vous n\'avez pas les permissions !`); }
    if (!args[0]) { return message.channel.send(`【${nope}】 Vous devez spécifier un nombre de messages à supprimer !`); }
    else if (isNaN(args[0])) { return message.channel.send(`【${nope}】 Veuillez spécifier un nombre !`); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`【${oki}】 \`${messages.size}\` messages ont été supprimés !`);
            });
};

module.exports.help = {
    name: 'clear'
};
