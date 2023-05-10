const Discord = require('discord.js');
const ms = require('ms');
const oki = ":white_check_mark:"
const nope = ":x:";
module.exports.run = (client, msg, args) => {
    let serverip = msg.content.split(' ').splice(1).join(' ');
    let serverip_fromfield = serverip.substring(0, serverip.indexOf(":"));
    let serverport_fromfield = serverip.split(':')[1];
    if (!serverip) {
        msg.channel.send("<@" + msg.author + `>【${nope}】 Vous n'avez pas rentré d'ip !`);
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

        msg.channel.send({ embed });
    }
};

module.exports.help = {
    name: 'say'
};