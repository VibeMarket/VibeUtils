const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const {prefix, ownerID, reactEmoji, token} = require('./config/config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (message.content.includes('Welcome')) {
     message.react(reactEmoji)
     console.log(`Reacted on ${message.author.username}'s message.`)
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
      command.execute(message, args);
    }catch (error) {
        console.error(error);
        message.reply('There was an error while trying to execute that command!');
    }
});
client.once("ready", () => {
    client.user.setActivity('you | +help', {
        type: "WATCHING"
    });
    console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
});

client.login(token);
