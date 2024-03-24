const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverspecs")
        .setDescription("Our server specifications"),
    async execute(interaction, client) {
        
        let serverSpecs = new MessageEmbed()
            .setTitle("<:icons_globe:859424401971609600> Our server specs.")
            .setDescription("<:icons_text5:920259712728072252> Intel(R) Xeon(R) CPU E5-2680 v2 @ 2.80 GHz\n<:icons_text5:920259712728072252> Cores: 20\n<:icons_text5:920259712728072252> RAM: 256GB DDR3\n<:icons_text5:920259712728072252> Disk Space: 40TB\n<:icons_text5:920259712728072252> Uplink: 10gb/s\n<:icons_text5:920259712728072252> OS: Proxmox 8")
        await interaction.reply({ embeds : [serverSpecs] })
    }
}
