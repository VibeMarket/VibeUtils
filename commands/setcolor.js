const Discord = require('discord.js');
const { prefix } = require('./config/config.json');
module.exports = { 
    name: 'setcolor',
    args: true,
    description: 'Set role color. Limited to boosters.',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        if (!args.length()) message.channel.send("Please specify a color.");
        if (message.member.roles.has("Booster")) {
            if (message.guild.roles.cache.find(role => role.name == message.author)) role.edit({ name: message.author, color: args });
            else {
                message.guild.roles.create({data: {name: message.author, color: args, permissions: 0}}).then (role => {message.members.roles.add(role); message.channel.send("I've created the role " + role + " and have given you it.")})};
        }else {
            message.channel.send("You have to be a Booster to use this command.");
        }
    }
}