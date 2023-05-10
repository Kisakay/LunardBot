const Discord = require("discord.js");
const exp = require('../exp.json');

module.exports.run = (client, message, args) => {
    const oki = "<a:Check:610877089306116112>";
    const nope = "<:UnCheck:637270232339054592>";
    if (!exp[message.author.id]) {
        exp[message.author.id] = {
            exp: 0,
            niveau: 1
        };
    }

    let cExp = exp[message.author.id].exp;
    let cNiv = exp[message.author.id].niveau;
    let nextLevelUp = cNiv * 100;
    let expNeededForLevelUp = nextLevelUp - cExp;

    let nivEmbed = new Discord.MessageEmbed()
    .setTitle("__**Systeme de niveaux**__: \`"+ message.author.username+ "\`")
    .setColor('#ddd98b')
    .addField("<a:rainbowtada:725002958768439467>__Niveau:__ ", cNiv+ "", true)
    .addField(":money_with_wings:__Expérience:__ ", cExp+ "", true)
    .setDescription(`**${expNeededForLevelUp}** points d'expériences requis pour le prochain niveau !`)
    .setTimestamp()


    message.channel.send(nivEmbed)
};

module.exports.help = {
    name: 'niv'
};
