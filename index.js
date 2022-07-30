/*

__   __ _  _          _   _  _    _  _     
\ \ / /(_)| |__  ___ | | | || |_ (_)| | ___
 \   / | ||  _ \/ -_)| |_| ||  _|| || |(_-/
  \_/  |_||____/\___| \___/  \__||_||_|/__/
              by polar!#7979

*/

const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./configs/config.json')
var fs = require('fs');

let client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
})

client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
    setTimeout(() => {
        console.log("🚀 Connected to Discord Socket!");
        client.user.setActivity(`${client.users.cache.size} members • /help`)
    }, 1000)
})

client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand) return;
    
    let command = client.commands.get(interaction.commandName);

    if(!command) return;

    try {
        await command.execute(interaction, client);
        console.log("🔗 " + interaction.user.tag + " ran /" + interaction.commandName);
    } catch (error) {
        console.log("🛑 An error has occured: " + error);
        await interaction.reply({
          content: "<:icons_Wrong:859388130636988436> Uh oh! An error has occured",
          ephemeral: true,
        });
        return;
    }
})

client.login(token);