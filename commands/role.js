const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { owner } = require('../configs/config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("role")
        .setDescription("Add a role to a user.")        
        .addUserOption((option) =>
        option
            .setName("user")
            .setDescription("Which user would you like to add a role to?")
            .setRequired(true)
        )
        .addRoleOption((option) =>
            option
            .setName("role")
            .setDescription(
                "Role name"
            )
            .setRequired(true)
        ),
    async execute(interaction, client) {
        
        let user = await interaction.options.getMember("user");
        let actualRole = await interaction.options.getRole("role");

        if(interaction.user.id == owner) {
            await user.roles.add(actualRole);
            let embed = new MessageEmbed()
            .setTitle('<:icons_Correct:859388130411282442> Added role!')
            .setDescription(`<@${user.id}> now has a new role!`)
            await interaction.reply({ embeds: [embed]})
        } else {
            let error = new MessageEmbed()
                .setTitle("<:icons_Wrong:859388130636988436> You don't have permission!")
                .setDescription("You need to be the owner of this bot to be able to add roles to users")
            await interaction.reply({embeds: [error]})
        }
    }
}