const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'vibesymbol',
    description: 'Shows an embed that explains why some people have that little symbol on the end of there name.',
    aliases: ['vs'],
    execute(message) {
    const vibeSymbolEmbed = new Discord.MessageEmbed()
    .setColor(embedColor)
    .addFields(
        {name: "Why do some people have a 'ツ' symbol after their name?", value: "In most cases, this symbol after a name means someone is staff, so you can ping them if you need assistance or have a question. You can determine staff more accurately by the color and name of their role; Pink or purple names with that symbol are not staff."}
    )
    .setFooter("Made by Cryptic#0001 | © Vibe Market")
     message.channel.send(vibeSymbolEmbed);
    }
}
