const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'serverinfo',
    description: 'Shows serverinfo',
    aliases: ['s'],
    execute(message) {
        const serverInfoEmbed = new Discord.MessageEmbed()
        .setColor('#9da9f0')
        .addFields(
           {name: "Vibe Members", value: `${message.guild.memberCount}`},
           {name: "Vibe Rules Channel", value: `<!#${message.guild.rulesChannelID}>`},
           {name: "Vibe Owner", value: `<!@${message.guild.ownerID}>`},
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(serverInfoEmbed);
    }
}
