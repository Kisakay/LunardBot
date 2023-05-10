  
const Commando = require('discord.js-commando');
const request = require('request'); 

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.MessageEmbed()
                    .setImage(body)
                    .setTitle('Miauw :cat:')
                    .setTimestamp()
                              
                   message.channel.send(emb)  
            }
        });
    }
