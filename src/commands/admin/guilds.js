const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guilds')
        .setDescription('Total number of servers bot active in'),
    async execute(interaction, client) {
        // Get total number of guilds
        const guilds = client.guilds.cache.size;
        // Get icon of the bot
        const botIcon = client.user.avatarURL();

        // Make an embed
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Guilds',
            description: `Currently active in ${guilds} servers!`,
            url: 'http://yp.hellofaizan.me/',
            timestamp: new Date(),
            footer: {
                name: 'Made by HelloFaizan#0',
                icon_url: botIcon,
            },
        };


        // send the embed
        await interaction.reply({ embeds: [exampleEmbed] });
    },
}