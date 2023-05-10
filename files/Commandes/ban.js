const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send(`【${nope}】 Vous n'avez pas la permission !`); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send(`【${nope}】 Le bot n'a pas la permission !`); }
    if (message.mentions.users.size === 0) { return message.channel.send(`【${nope}】 Vous devez mentionner un utilisateur !`); }
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`【${nope}】 Je n'ai pas les permission.`)
        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send(`【${nope}】 Je n'ai pas trouvé l'utilisateur !`); }
        message.mentions.users.first().send(`【${nope}】 Vous êtes banni du serveur __**${message.guild.name}**__ par \`${message.author.username}\``)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`【${oki}】 ${member.user} viens d'être banni par ${message.author}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
            .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user} est ban par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban'
};
