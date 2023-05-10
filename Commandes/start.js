const ms = require('ms');
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
exports.run = async (client, message, args) => {

    // si ta pas les perm
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(`【${nope}】 Vous devez disposer des autorisations de gestion des messages pour démarrer le giveaways.`);
    }


    // le channel du giveaway
    let giveawayChannel = message.mentions.channels.first();
    // si ya pas de channel mentioné
    if(!giveawayChannel){
        return message.channel.send(`【${nope}】 Vous devez mentionner un channel valide!`);
    }

    // duréer du giveaway
    let giveawayDuration = args[1];
    // si la duration du giveaway est invalid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(`【${nope}】 Vous devez spécifier une durée valide!`);
    }

    // Nombre de gagnant
    let giveawayNumberWinners = args[2];
    // si les winner spécifier n'est pas un chiffre
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(`【${nope}】 Vous devez spécifier un nombre valide de gagnants!`);
    }

    // prix du giveaway
    let giveawayPrize = args.slice(3).join(' ');
    // si ya pas de prix spécifié
    if(!giveawayPrize){
        return message.channel.send(`【${nope}】 Vous devez spécifier un prix valide!`);
    }

    // lancement du giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // duration du giveaway
        time: ms(giveawayDuration),
        // prix du givaway
        prize: giveawayPrize,
        // noms de gagnant
        winnerCount: giveawayNumberWinners,
        // owner du concours
        hostedBy: client.config.hostedBy ? message.author : null,
        // le message
        messages: {
            giveaway: (client.config.everyoneMention ? "" : "")+"🎉🎉 **GIVEAWAY** 🎉🎉",
            giveawayEnded: (client.config.everyoneMention ? "" : "")+"🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
            timeRemaining: "Temps restant: **{duration}**!",
            inviteToParticipate: "Réagissez à :tada: pour avoir une chance de gagner !",
            winMessage: "Bravo, {winners}! Tu as gagné **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Concours annulé, perssone a gagné...",
            hostedBy: " Réalisé par: {user}",
            winners: "gagnant(s)",
            endedAt: "Se termine à",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jour",
                pluralS: false
            }
        }
    });

    message.channel.send(`【${oki}】Le concours a commencé dans ${giveawayChannel}!`);

};