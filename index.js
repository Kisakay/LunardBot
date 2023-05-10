const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const fs = require('fs');
const config = require('./files/config.json');
client.config = config;

require("colors")

fs.readdir("./files/Events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./files/Events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`[*] Event load: ${eventName} !`.gray);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./files/Events/${file}`)];
    });
});

fs.readdir("./files/Commandes/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./files/Commandes/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./files/giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false, exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000", reaction: "🎉"
    }
});

client.login(config.token);