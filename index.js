const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const {prefix, ownerID, reactEmoji, token} = require('./config/config.json');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}

client.on('message', message => {
    if (message.content.toLowerCase().startsWith('welcome')) {
     message.react(reactEmoji);
     console.log(`Reacted on ${message.author.tag}'s message.`);
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
client.login(token)
}
