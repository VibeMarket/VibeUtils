const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'vibeinfo',
    description: 'Shows my vibe stats',
    aliases: ['vs'],
    execute(message) {
        const serverSpecsEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
           {name: "Vibe Memebers", value: `${message.guild.memeberCount}`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}
