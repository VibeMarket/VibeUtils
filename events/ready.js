module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('you | +help', {
            type: "WATCHING"
        });
        console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
	},
};