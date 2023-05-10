const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    const oki = ":ballot_box_with_check:"
    const nope = ":regional_indicator_x:";
    let début = Date.now();
   
    message.channel.send('<a:pingponggif:725004954787512454>')
    .then((m) => m.edit(`【${oki}】__**Pong**__: \ ${Date.now() - début}ms`));
    

}

module.exports.help = {
    name: 'ping'
};
