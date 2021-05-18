const { prefix } = require('../config/config.json');
module.exports = {
    name: 'help',
    description: 'List of all my commands or info about a specific command.',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            data.push('**Help Menu**\n');
            data.push('+' + commands.map(commands => commands.name).join(', +'));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            return message.author.send(data, { split: true})
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with all my commands!');
            })
            .catch(error => {
                console.error(`I could not send my help DM to ${message.author.tag}.\n`, error);
                message.reply('It seems I could not DM you! Do you have DMs disabled?')
            })
            }
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply('That\'s not a valid command!');
            }
            data.push(`**Name:** ${command.name}`);
            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
            message.channel.send(data, {split: true});
        }
    }