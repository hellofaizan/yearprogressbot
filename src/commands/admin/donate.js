const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Donate to the developer of this bot'),
    async execute(interaction, client) {
        // Create a new embed and also attach few buttons
        const embed = {
            title: 'Donate to the developer',
            fields: [
                {
                    name: 'Github Sponser',
                    value: 'https://github.com/sponsors/hellofaizan'
                },
            ],
            thumbnail: {
                url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            },

            color: 0x0099ff,
            footer: {
                text: 'Thank you for your support!',
            },
        };
        // Send the embed to the same channel as the message
        await interaction.reply({ embeds: [embed] });
    },

}