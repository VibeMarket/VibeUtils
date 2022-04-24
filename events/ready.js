module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity(`discord.gg/vibemarket | +help`, {
            type: "WATCHING"
        });
        console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
	},
};

