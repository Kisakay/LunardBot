const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
exports.run = async (client, message, args) => {

    // si le membre na pas la perm
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(`【${nope}】 Vous devez disposer des autorisations de gestion des messages pour relancer le giveaway.`);
    }

    // si l'id nest pas spécifier
    if(!args[0]){
        return message.channel.send(`【${nope}】 Vous devez spécifier un ID de message valide!`);
    }

    // essaye de trouvé l'id 
    let giveaway = 
    // cherche le prix
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // cherche l'id
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // si tu trouve rien
    if(!giveaway){
        return message.channel.send(`【${nope}】Impossible de trouver un giveaway pour `+ args.join(' ') +'`.');
    }

    // le reroll
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // message qui marche
        message.channel.send('Giveaway relancé!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway avec ID de message ${giveaway.messageID} n'est pas terminée.`)){
            message.channel.send(`【${nope}】 Ce giveaway n'est pas terminé!`);
        } else {
            console.error(e);
            message.channel.send(`【${nope}】 Une erreur s'est produite...`);
        }
    });

};
