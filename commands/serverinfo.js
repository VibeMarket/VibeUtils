const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'serverinfo',
    description: 'Shows serverinfo',
    aliases: ['s'],
    execute(message) {
        const serverSpecsEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
           {name: "Vibe Members", value: `${message.guild.memeberCount}`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}
