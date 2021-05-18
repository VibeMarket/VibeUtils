const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'kevinsmellslolgottem',
    description: 'Haha...',
    execute(message) {
        const smellyEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
            {name: '**Haha**', value: "That's not very nice..."},
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(smellyEmbed);
    }
}