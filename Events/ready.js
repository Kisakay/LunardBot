require("colors")
module.exports = (client) => {
    let statuses = [
        `?help | ${client.guilds.cache.size} Serveur(s) | ${client.users.cache.size} Utilisateur(s)`,
        `Lunard Reborn | ?help`
    ]
    let statuses2 = [
        `STREAMING`,
        `PLAYING`,
        `WATCHING`,
        `LISTENING`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        let status2 = statuses2[Math.floor(Math.random() * statuses2.length)];
        client.user.setActivity(status, {
            type: status2,
            url: "https://twitch.tv/kisakay"
        })

    }, 7500) //Seconds to Random
    console.log(`${client.user.tag} load !`.green);
    console.log(`${client.guilds.cache.size} Serveurs`.green)
    console.log('Bot is online now!'.green);
};