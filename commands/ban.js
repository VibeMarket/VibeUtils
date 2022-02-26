const { staffRole } = require('../config/config.json');
module.exports = {
    name: 'ban',
    description: 'Bans a user from the server.',
    args: true,
    execute(message, client, args) {
        var member = message.member.mentions.first();
        if (!message.member.roles.cache.has(staffRole)) {
            message.channel.send("You do not have permission to execute this command. Only people with the Staff role can.");
        }else if (!member == " ") {
            message.channel.send("Please specify a member!");
        }
        
    }
}