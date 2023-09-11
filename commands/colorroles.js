const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("colorroles")
        .setDescription("Why cant I have a colored role?"),
    async execute(interaction, client) {
        
        let colorEmbed = new MessageEmbed()
            .setTitle("<:icons_reply:859388126153932802> Why are there no color roles?")
            .setDescription("Color roles are an integral part of our Staff Team and Member List, so letting a server of 600+ members have their own role color can be confusing and disorganised.")
        await interaction.reply({ embeds : [colorEmbed] })
    }
}