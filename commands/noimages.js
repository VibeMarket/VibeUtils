const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = {
    name: 'noimages',
    description: 'Shows an embed of why you cannot post images in hangout.',
    aliases: ['ni'],
    execute(message) {
    const noimagesEmbed = new Discord.MessageEmbed()
    .setColor('#9da9f0')
    .addFields(
        {name: "Why can't I post images in hangout?", value: 'Once you reach level 5 you will be able to post images in hangout, to level up all you need to do is talk!'} 
    )
    .setFooter("Made by Cryptic#0001 | © Vibe Market ")
     message.channel.send(noimagesEmbed);
    }
}