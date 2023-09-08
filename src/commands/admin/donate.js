const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Donate to the developer of this bot'),
    async execute(interaction, client) {
        // Create a new embed and also attach few buttons
        const embed = {
            title: 'Donate to the developer',
            description: 'It\'s actually a good thought, go for it 😄',
            fields: [
                {
                    name: 'Github Sponser',
                    value: 'https://github.com/sponsors/hellofaizan'
                },
                {
                    name: 'Paypal',
                    value: 'https://paypal.me/hellofaizan?country.x=IN&locale.x=en_GB'

                }
            ],
            thumbnail: {
                url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            },

            color: 0x0099ff,
            image: {
                url: 'https://cdn.discordapp.com/attachments/1065518726855807067/1149178725842305074/20230907_083536.jpg'
            },
            footer: {
                text: 'Thank you for your support!',
            },
        };
        // Send the embed to the same channel as the message
        await interaction.reply({ embeds: [embed] });
    },

}