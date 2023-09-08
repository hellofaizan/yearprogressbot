const { SlashCommandBuilder } = require('@discordjs/builders');
const { connectToMongo, clientdb } = require('../../db')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Setup the yearly progress command')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to send the progress updates to')
                .setRequired(true)),

    async execute(interaction, client) {
        const user = interaction.user.id
        // remove the < # > from the string
        const DISCORD_CHANNEL_ID = interaction.options.getChannel('channel').id.replace(/[<#>]/g, '')
        // check if the channel exists
        if (client.channels.cache.has(DISCORD_CHANNEL_ID)) {
             
            await connectToMongo()
            
            const db = clientdb.db('yearlyProgress')
            const collection = db.collection('servers')
            await collection.insertOne({ user, channel: DISCORD_CHANNEL_ID, server: interaction.guildId })

            await interaction.reply(`${interaction.user} Yearly Progress updates has been set to <#${DISCORD_CHANNEL_ID}> Channel`);
        } else {
            await interaction.reply(`Channel not found`);
            return;
        }
    },
}