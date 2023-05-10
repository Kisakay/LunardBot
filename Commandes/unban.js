const oki = ":ballot_box_with_check:"
const nope = ":regional_indicator_x:";
module.exports.run = async (client, message, args) => {
  let bannedMember = await client.users.fetch(args[0])
  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`【${nope}】 Vous n'avez pas les permission.`)
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`【${nope}】 Je n'ai pas les permission.`)
    if(message.content === "!unban"){
      return 
  }
    message.guild.members.unban(bannedMember)

    message.channel.send(`<@${bannedMember.id}> **est bien débannis de se serveur !**`)

};
