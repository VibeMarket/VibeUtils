const Discord = require('discord.js');
const { prefix, ownerID } = require('../config/config.json');
const client = new Discord.Client();

module.exports = {
    name: 'role',
    description: 'Gives someone a role, only Kevin is allowed to use this command.',
    aliases: ['r'],
    execute(message) {
        const roleNotEnoughArgs = new Discord.MessageEmbed()
.setColor('#9da9f0')
.addFields(
   {value: `You didn't have enough arguements, ${message.author}`},
)
.setFooter("Made by Cryptic#0001 | © Vibe Market")
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        if (message.author.id === ownerID) {
            if (!args.length) {
                return message.channel.send(roleNotEnoughArgs);
            }
            if (!message.mentions.users.size) {
                return message.channel.send('Please ping a user to give them a role.') 
            }

            const role = client.guilds.roles.cache.find(role => role.name === args[1]);
            const member = message.mentions.members.first();
            member.roles.add(role);       


        }
    }
}
