module.exports.run = async (bot, message, args) => {
	let name = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
	if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) { return message.channel.send(`【${nope}】 Vous n'avez pas la permission !`); }
    if(!name) return message.channel.send(`【x】 Je n'ai pas trouvé de noms.`);
    guild.channels.create(name, {
	type: 'text',
	permissionOverwrites: [
		{
			id: message.guild.id,
			deny: ['VIEW_CHANNEL'],
		},
		{
			id: message.author.id,
			allow: ['VIEW_CHANNEL'],
		},
	],
});
}