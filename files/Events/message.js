const prefix = '?';
const exp = require(`${process.cwd()}/files/exp.json`);
const oki = ":ballot_box_with_check:"
const fs = require('fs')

module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let commande = args.shift();
    let cmd = client.commands.get(commande);

    if (!cmd) { return; }
    cmd.run(client, message, args);

    async function xpLevel() {
        let addExp = Math.floor(Math.random() * 5) + 1;
    
        if (!exp[message.author.id]) {
            exp[message.author.id] = {
                exp: 0,
                niveau: 1
            };
        }
        let currentExp = exp[message.author.id].exp;
        let currentNiv = exp[message.author.id].niveau;
        let nextLevel = currentNiv * 100;
        exp[message.author.id].exp = currentExp + addExp;
    
        if(nextLevel <= currentExp) {
            exp[message.author.id].niveau +=1;
            message.channel.send(`【${oki}】**GG**, <@`+message.author.id+`> est passé niveaux \`${currentNiv + 1}\``).then(msg => { });
        }
        fs.writeFile(process.cwd()+'/files/exp.json', JSON.stringify(exp), err =>{
            if (err) console.log(err);
        });
    }

    await xpLevel();
};
// if(message.content === "?unban"){
//     return message.channel.send(`【${nope}】 Entrez l'id de la perssone à débbannir !`)
// }