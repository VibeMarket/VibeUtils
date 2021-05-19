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
           {name: "My server specs", value: `Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20 GHz
           vCores: 6
           RAM: 16 gigabytes DDR4
           Disk Space: 400 gigabytes
           Uplink: 400 mbps
           OS: Ubuntu 20.04`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}
