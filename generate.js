const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, guild_id, client_id } = require('./configs/config.json');
const fs = require("fs");

let commands = [];
let commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
	try {
		console.log("⏰ Started refreshing slash commands.");

		await rest.put(Routes.applicationGuildCommands(client_id, guild_id), { body: commands });

		console.log("🚀 Reloaded slash commands!");
	} catch (error) {
		console.error("🛑 An error has occured:" + error);
	}
})();