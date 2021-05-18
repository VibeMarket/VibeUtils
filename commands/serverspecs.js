const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'serverspecs',
    description: 'Shows my server specifications',
    aliases: ['ss'],
    execute(message) {
        const serverSpecsEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
           {name: "My server specs", value: `CPU: AMD EPYC 7282 16 cores (we only have 6 of those 16)
           RAM: 16 gigabytes DDR4
           Disk Space: 400 gigabytes
           Uplink: 400 mbps
           OS: Ubuntu 20.04`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}