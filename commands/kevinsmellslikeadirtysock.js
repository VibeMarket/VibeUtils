const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'kevinsmellslikeadirtysock',
    description: 'Haha...',
    execute(message) {
        const smellyEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
            {name: '**Haha**', value: "That's not very nice..."},
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(smellyEmbed);
    }
}