const Discord = require('discord.js');
const { prefix, embedColor } = require('../config/config.json');
module.exports = { 
    name: 'setcolor',
    args: true,
    description: 'Set role color. Limited to boosters.',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const specifyAColorEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addField("Error: ", "Please specify a color!")
        const roleAddedEmbed = new Discord.MessageEmbed()
        .setColor(args[1])
        .addField(`Color: ${args[1]} set!`, "Your color has been set.")
        .setFooter("Run +setcolor again to set the color to a new one.");
        const mustBeBoosterEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addField("Error: ", "You must be a ✭ Booster to use this command.");
        const colorChangedEmbed = new Discord.MessageEmbed()
        .setColor(args[1])
        .addField(`Color changed to: ${args[1]}.`, "Your color has been changed.");
        const donthaveRoleEmbed = Discord.MessageEmbed()
        .setColor(embedColor)
        .addField("Info: ", "I noticed you already have a role, adding it back now.");
        if (message.member.roles.cache.some(role => role.name === '✭ Booster')) {
            if (!args[1]) message.channel.send(specifyAColorEmbed);
            let role = message.guild.roles.cache.find(role => role.name === message.author.username);
            if (role) if (!message.member.roles.has(message.author.username)) message.member.roles.add(message.author.username); message.channel.send(donthaveRoleEmbed);
            if (role) role.edit({ name: message.author.username, color: args[1]});
            else {
                message.guild.roles.create(
                    {data: {name: message.author.username, color: args[1], permissions: 0}}).then(role => {role.setPosition(100); message.member.roles.add(role)}); message.channel.send(roleAddedEmbed);};
        }else {
            message.channel.send(mustBeBoosterEmbed);
        }
    }
}
