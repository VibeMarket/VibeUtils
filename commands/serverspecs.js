const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverspecs")
        .setDescription("Our server specifications"),
    async execute(interaction, client) {
        
        let serverSpecs = new MessageEmbed()
            .setTitle("<:icons_globe:859424401971609600> Our server specs.")
            .setDescription("<:icons_text5:920259712728072252> Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20 GHz\n<:icons_text5:920259712728072252> vCores: 6\n<:icons_text5:920259712728072252> RAM: 16GB DDR4\n<:icons_text5:920259712728072252> Disk Space: 400GB\n<:icons_text5:920259712728072252> Uplink: 400mb/s\n<:icons_text5:920259712728072252> OS: Ubuntu 20.04")
        await interaction.reply({ embeds : [serverSpecs] })
    }
}