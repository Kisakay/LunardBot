const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Vous devez disposer des autorisations de gestion des messages pour relancer le giveaway.');
    }
    
    if(!args[0]){
        return message.channel.send(':x: Vous devez spécifier un ID de message valide!');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Impossible de trouver un giveaway pour `'+ args.join(' ') + '`.');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('Le giveaway se terminera dans moins de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' secondes...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway avec ID de message ${giveaway.messageID} est déjà terminée.`)){
            message.channel.send('Ce giveaway est déjà terminé!');
        } else {
            console.error(e);
            message.channel.send(`Une erreur s'est produite...`);
        }
    });

};
