const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("noimages")
        .setDescription("Why can't I post images in hangout?"),
    async execute(interaction, client) {
        
        let noImages = new MessageEmbed()
            .setTitle("<:icons_reply:859388126153932802> Why can't I post images in hangout?")
            .setDescription("Once you reach level 5, you will be able to post images in hangout; to level up all you need to do is talk!")
        await interaction.reply({ embeds : [noImages] })
    }
}