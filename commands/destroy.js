const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { owner } = require('../configs/config.json')
module.exports = {
    data: new SlashCommandBuilder()
        .setName("destroy")
        .setDescription("Restarts the bot"),
    async execute(interaction, client) {

        if(interaction.user.id == owner) {
            let success = new MessageEmbed()
                .setTitle("<:icons_loading:859424401036148776> Restarting!")
                .setDescription("If you did not fuck up, I should come back online")
            await interaction.reply({embeds: [success]})
            setTimeout(() => {
                process.exit()
            }, 1000)
        } else {
            let error = new MessageEmbed()
                .setTitle("<:icons_Wrong:859388130636988436> You don't have permission!")
                .setDescription("You need to be the owner of this bot to be able to restart it.")
            await interaction.reply({embeds: [error]})
        }
    }
}