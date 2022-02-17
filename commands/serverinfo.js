const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const client = new Discord.Client();

module.exports = {
    name: 'serverinfo',
    description: 'Shows serverinfo',
    aliases: ['s'],
    execute(message) {
        const serverInfoEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
           {name: "Owner", value: `<@${message.guild.ownerID}>`},
           {name: "Members", value: `${message.guild.memberCount}`},
           {name: "Guilds:", value: `${client.guilds.cache.size}`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverInfoEmbed);
    }
}
