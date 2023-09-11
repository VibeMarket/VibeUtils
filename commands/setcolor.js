const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setcolor")
        .setDescription("Set a role color for yourself.")
    .addStringOption((option) => 
        option
        .setName("color")
        .setDescription("Specify a hex color for your new color role!")
        .setRequired(true)
    ),
    async execute(interaction, client) {
        
        let color = interaction.options.getString("color");
        
        if(interaction.member.roles.cache.some(role => role.name === '✭ Booster')) {
            let role = interaction.guild.roles.cache.find(role => role.name === interaction.user.username);
            
            if(color.length > 6) {
                let error = new MessageEmbed()
                    .setTitle("<:icons_Wrong:859388130636988436> A hexadecimal code must be less than or equal to 6 characters")
                    .setDescription("A hexadecimal code should be provided without the hashtag and it must be >6 characters. Example: `ff0000`")
                await interaction.reply({embeds: [error]})
                return;
            }

            if(!role) {
                await interaction.guild.roles.create({ name: interaction.user.username, color: color, position: 12, mentionable: false})
                console.log(interaction.guild.roles.cache.find(role => role.name === interaction.user.username).id)
                let embed = new MessageEmbed()
                    .setTitle('<:icons_Correct:859388130411282442> Created role!')
                    .setDescription(`Your custom color role has been created, you can get it by running this command again with a new color`)
                    await interaction.reply({ embeds: [embed]})
            }

            if(role) {
                if(!interaction.member.roles.cache.has(interaction.user.username)) {
                    await interaction.member.roles.add(role);
                    let id = await interaction.guild.roles.cache.find(role => role.name === interaction.user.username).id
                    // await interaction.guild.roles.setPositions({ role: id, position: 12 })
                    role.edit({ name: interaction.user.username, color: color });
                    let embed = new MessageEmbed()
                        .setTitle('<:icons_Correct:859388130411282442> Updated role!')
                        .setDescription(`Your custom color role has been updated!`)
                    await interaction.reply({ embeds: [embed]})
                } 
            }

        } else {
            let error = new MessageEmbed()
                .setTitle("<:icons_Wrong:859388130636988436> You don't have permission!")
                .setDescription("You must be a booster to set a custom colored role!")
            await interaction.reply({embeds: [error]})
        }
    }
}