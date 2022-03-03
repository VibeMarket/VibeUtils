const Discord = require('discord.js');
const { prefix } = require('../config/config.json');
module.exports = { 
    name: 'setcolor',
    args: true,
    description: 'Set role color. Limited to boosters.',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        //let role = message.guild.roles.find(x => x.name == message.author.username);
        if (message.member.roles.cache.some(role => role.name === '✭ Booster')) {
            if (!args[1]) message.channel.send("Please specify a color.");
            let role1 = message.guild.roles.cache.find(role => role.name === message.author.username);
            if (role1) role1.edit({ name: message.author.username, color: args[1]});
            else {
                message.guild.roles.create(
                    {data: {name: message.author.username, color: args[1], permissions: 0}}).then(role => {role.setPosition(100); message.member.roles.add(role)}); message.channel.send("I've created the role and I have given you it. If you experience any issues with this command, please contact Kevin.");};
        }else {
            message.channel.send("You have to be a ```✭ Booster``` to use this command.");
        }
    }
}