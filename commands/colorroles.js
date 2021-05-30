const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'colorroles',
    description: 'Shows an embed explaining why we do not have colored roles.',
    aliases: ['cr'],
    execute(message) {
        const colorRolesEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
            {name: 'Why dont we have colour roles?', value: 'Colour roles are an integral part of the Vibe Market staff team and member list, so letting a server of 600+ members have their own role colours can get confusing and disorganised.'}
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(colorRolesEmbed);
    }
}