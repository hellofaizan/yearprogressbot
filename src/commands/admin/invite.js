const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Grab an invite link for the bot!'),
    async execute(interaction, client) {
        // Get user avatar of the HelloFaizan
        const userAvatar = client.users.cache.get('890232380265222215').avatarURL();
        // make an embed
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Invite Link',
            url: 'http://yp.hellofaizan.me/',
            description: 'Click the title to get an invite link for the bot!',
            timestamp: new Date(),
            footer: {
                'text': 'Made by HelloFaizan#2746',
                'icon_url': userAvatar,
            },
            thumbnail: {
                'url': 'https://i.imgur.com/CZFt69d.png',
            },

        };

        // send the embed
        await interaction.reply({ embeds: [exampleEmbed] });
    },
}