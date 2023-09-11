const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("levelroles")
        .setDescription("How do I become member?"),
    async execute(interaction, client) {
        
        let levelRoles = new MessageEmbed()
            .setTitle("<:icons_reply:859388126153932802> How can I become a member?")
            .setDescription("To become a member you need to reach Level 5, we also offer other roles every 10 levels after Member.")
        await interaction.reply({ embeds : [levelRoles] })
    }
}