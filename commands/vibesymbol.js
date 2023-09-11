const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vibesymbol")
        .setDescription("Whats that weird icon.."),
    async execute(interaction, client) {
        
        let symbolEmbed = new MessageEmbed()
            .setTitle("<:icons_reply:859388126153932802> Why do some people have 'ツ' next to their name?")
            .setDescription("In most cases, this means the user is staff. You can ping them if you ever need assistance, you can determine this more accurately by the color of their role: Pink or purple means that users with that symbol are **not** staff.")
        await interaction.reply({ embeds : [symbolEmbed] })
    }
}