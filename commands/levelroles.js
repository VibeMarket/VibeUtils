const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'levelroles',
    description: 'Shows an embed explaining how to get the member role as well as the other roles.',
    aliases: ['lr'],
    execute(message) {
    const levelRolesEmbed = new Discord.MessageEmbed()
    .setColor('#9da9f0')
    .addFields(
        {name: "How can I become a member?",value: "To become a member all you need to do is level up to level 5! We also offer other roles that you get every 10 levels after this level. To find out more information, refer to: https://discord.com/channels/744393148465152081/744447644088402032/785349726153342986"}
    )
    .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(levelRolesEmbed);
    }
}