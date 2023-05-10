var Discord = require('discord.js');
var os = require('os-utils');

module.exports.run = (client, message, args) => {
    os.cpuUsage(function(c){

    const embed = new Discord.MessageEmbed()
        .setColor("#42ff08")
        .addField("=====================", '**Consommé en temps réel** :')
        .addField("**CPU USAGE:**", 'CPU Usage (%): **' + c + '** %' )
        .addField("**MEMORY USAGE:**", 'MEMORY Usage (%): **' + os.freememPercentage() + '** %' )
        .addField("=====================", '**Caractéristique de la machine** :')
        .addField("**TOTAL MEMORY:**", 'TOTAL MEMORY (MB): **' + os.totalmem() + '** MB')
        .addField("**PROCESSEUR TYPE:**", '** Intel(R) Xeon(R) CPU E5-1650 v3 @ 3.80GHz (6 CORES / 12 THREADS)**')
        .addField("=====================", '`Lunard Bot v1`')
        .setFooter('Status bot', 'https://cdn.discordapp.com/attachments/723601176041357384/724662920515944538/790a666fb3cf4ae47dd1c63ca4c251a3.gif')
    return message.channel.send(embed); 

})}
module.exports.help = {
    name: 'status'
};
