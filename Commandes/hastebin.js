const hastebin = require('hastebin-gen');
const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
exports.run = (client, msg, args) => {

     let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return msg.channel.send(`【${nope}】 Je n'ai pas trouvé de phrase a mettre dans le hastebin.`) }

        hastebin(haste).then(r => {

            msg.channel.send(`【${oki}】 **Voici votre hastebin:** `  + r);

        }).catch(console.error);

        msg.delete();

}        

module.exports.help = {
  name: "hastebin"
}