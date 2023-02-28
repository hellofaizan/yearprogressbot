const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Donate and Support the bot developers'),
    async execute(interaction, client) {
        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel('Invite')
                    .setStyle(5)
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1079281779246116926&permissions=2684356632&scope=applications.commands%20bot')
            )
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel('Support Server')
                    .setStyle(5)
                    .setURL('https://discord.gg/invite/rraBbMQraQ')
            )

        // Create a new embed
        const embed = {
            title: 'About the Bot',
            description: 'This bot is made by hellofaizan',
            thumbnail: client.user.avatarURL({ dynamic: true }),
            url: "https://github.com/sponsors/CorwinDev",
            components: [row],
            type: 'editreply',
        };
        await interaction.reply({ embeds: [embed] });
    },
}