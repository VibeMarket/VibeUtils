const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the current ping of the bot."),
    async execute(interaction, client) {
        
        let ping = client.ws.ping;

        if(ping < 120) {
            let goodPing = new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(`<:icons_goodping:880113406915538995> ${ping}ms`)
            await interaction.reply({ embeds: [goodPing] })
        } else if (ping > 200) {
            let midPing = new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(`<:icons_idelping:880113405720145990> ${ping}ms`)
            await interaction.reply({ embeds: [midPing] })
        } else if (ping > 500) {
            let badPing = new MessageEmbed()
            .setColor("#2F3136")
            .setDescription(`<:icons_badping:880113405007114271> ${ping}ms`)
            await interaction.reply({ embeds: [badPing] })
        }
    }
}