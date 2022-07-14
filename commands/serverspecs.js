const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'serverspecs',
    description: 'Shows my server specifications',
    aliases: ['ss'],
    execute(message) {
        const serverSpecsEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
           {name: "Server specs", value: `
           Intel(R) Xeon(R) CPU E5-2690 v2
           Cores: 6
           RAM: 16 gigabytes DDR3
           Disk Space: 256 gigabytes
           Uplink: 100 mbps with 1 gbps burst
           OS: Ubuntu 22.04`}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverSpecsEmbed);
    }
}
