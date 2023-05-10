const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    const membre = message.mentions.members.first() || message.member;
    if (!membre) { return message.channel.send(`【${nope}】 Veuillez mentionner un utilisateur !`); }

    message.channel.send({
        embed: {
            color: 0xddd98b,
            title: `**__Informations__**: *${membre.user.username}*`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: '__**ID**__:',
                    value: '`' + membre.id + '`'
                },
                {
                    name: '__**Date de créations**__:',
                    value: '`' + moment.utc(membre.user.createdAt).format("LL") + '`'
                },
                {
                    name: '__**Jeu**__:',
                    value: membre.user.presence.game ? membre.user.presence.game.name : '__`Aucun jeu`__' 
                },
                {
                    name: `__**Date d'arrivé**__:`,
                    value: '`' + moment.utc(membre.joinedAt).format('LL') + '`'
                }
            ],
            timestamp: new Date(),
            }
    });
};

module.exports.help = {
    name: 'stats'
};
