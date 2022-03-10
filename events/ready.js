module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity(`${client.users.cache.size} members | +help`, {
            type: "WATCHING"
        });
        console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
	},
};

