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
                    value: 'https://twitter.com/hellofaizandev/',
                },
                {
                    name: 'Instagram',
                    value: 'https://instagram.com/curiousfaizan/',
                },
                {
                    name: 'Discord',
                    value: 'https://discord.gg/invite/rraBbMQraQ',
                },
            ],
            color: 0x00ff00,
            
        };
        // Send the embed to the same channel as the message
        await interaction.reply({ embeds: [embed] });
    },

}