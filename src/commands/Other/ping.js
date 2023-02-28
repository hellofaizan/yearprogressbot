const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction, client) {
        // To make the reply private to the user, use interaction.reply('Pong!', {ephemeral: true});
        await interaction.reply('Pong!');
    },
}