const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const config = require('./config.json');
client.config = config;
var prefix = "?";
const exp = require('./exp.json');

const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    
fs.readdir("./Events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        console.log(` Events chargée sous le noms de : ${eventName} 🎊`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
});

fs.readdir("./Commandes/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commandes/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Commandes chargée sous le noms de : ${commandName} 🎊`);
    });
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.login(config.token);

//Systeme d'xp
client.on('message', message => {
    if(message.content === "?unban"){
        return message.channel.send(`【${nope}】 Entrez l'id de la perssone à débbannir !`)
    }
    

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
        message.channel.send(`【${oki}】**GG**, <@`+message.author.id+`> est passé niveaux \`${currentNiv + 1}\``).then(msg => {
        });
    }
    fs.writeFile('./exp.json', JSON.stringify(exp), err =>{
        if (err) console.log(err);
    });
});


const commands = {
	'server': (msg) => {
			let serverip = msg.content.split(' ').splice(1).join(' ');
			let serverip_fromfield = serverip.substring(0,serverip.indexOf(":"));
			let serverport_fromfield = serverip.split(':')[1];
			if (!serverip) {

				msg.channel.send("<@"+msg.author + `>【${nope}】 Vous n'avez pas rentré d'ip !`);

			} else {
				
				if (!serverip.includes(":")) {
					serverip_final = serverip;
				} else {
					serverip_final = serverip_fromfield;
				}
				
				if (!serverport_fromfield) {
					var serverport_final = "25565";
				} else {
					var serverport_final = serverport_fromfield;
				}
				
				const embed = new Discord.MessageEmbed()
			  .setTitle("Minecraft Serveurs Status")
			  .setColor("#f0303d")
			  .setImage("http://status.mclive.eu/Server/" + serverip_final + "/" + serverport_final + "/banner.png")
			  .setTimestamp()
			  .addField("IP", serverip)

			  msg.channel.send({embed});
				
				
			}
		
		}
};

client.on('message', msg => {
	if (!msg.content.startsWith(prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
});