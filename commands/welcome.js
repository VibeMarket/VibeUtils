const { prefix } = require('../config/config.json');
const Discord = require('discord.js');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'welcome',
    description: 'Just a basic welcome command!',
    aliases: ['wel;],
    execute(message) {
        const welcomeEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
          {name: '**Welcome to Vibe**', value: 'test'})
        .setFooter("Made by Cryptic#0001 (Contributed) | © Vibe Market")
       message.channel.send(welcomeCmd);
}
} 
