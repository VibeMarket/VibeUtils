const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("Shows Server Information"),
    async execute(interaction, client) {
        
        console.log(interaction.guild.ownerID);

        let serverInfo = new MessageEmbed()
            .setTitle("<:icons_settings:859388128040976384> Server Statistics:")
            .setDescription(`<:icons_text5:920259712728072252> Owner: <@712092367338995722>\n<:icons_text5:920259712728072252> Members: ${interaction.guild.memberCount}`)
        await interaction.reply({ embeds : [serverInfo] })
    }
}