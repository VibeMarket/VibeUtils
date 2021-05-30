const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'serverinfo',
    description: 'Shows my vibe stats',
    aliases: ['s'],
    execute(message) {
        const serverSpecsEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
           {name: "Vibe Members", value: `${message.guild.memeberCount}`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}
