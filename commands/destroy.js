const Discord = require('discord.js');
const { ownerID } = require('../config/config.json');
module.exports = {
    name: 'destroy',
    description: 'Takes the bot offline. Limited to only be used by Kevin.',
    execute(message) {
        if (message.author.id == ownerID) {
            process.exit();
        }else {
            message.channel.send("You don't have permission to use this command. Please contact " + `<@${ownerID}> if you believe you should be able to use this command (which you're definitely not supposed to be able too)`);
        }
    }
}