const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dev')
        .setDescription('About the developer of this bot'),
    async execute(interaction, client) {
        // Create a new embed
        const embed = {
            title: 'About the developer',
            fields: [
                {
                    name: 'Name',
                    value: 'hellofaizan',
                },
                {
                    name: 'Age',
                    value: '18',
                },
                {
                    name: 'Location',
                    value: 'India',
                },
                {
                    name: 'Github',
                    value: 'https://github.com/hellofaizan/',
                },
                {
                    name: 'Twitter',
                    value: 'https://twitter.com/hellofaizaan/',
                },
                {
                    name: 'Instagram',
                    value: 'https://instagram.com/hellofaizaan/',
                },
                {
                    name: 'Discord',
                    value: 'https://discord.com/invite/vUHMxPvege',
                },
            ],
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/1065518726855807067/1149623519664164884/IMG20230815180743.jpg'
            },
            image: {
                url: 'https://cdn.discordapp.com/attachments/1065518726855807067/1149178725842305074/20230907_083536.jpg'
            },
            color: 0x00ff00,
            
        };
        // Send the embed to the same channel as the message
        await interaction.reply({ embeds: [embed] });
    },

}