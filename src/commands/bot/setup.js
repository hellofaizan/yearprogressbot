const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Setup the year progress command')
        .addStringOption(option =>
            option.setName('channel')
                .setDescription('The channel to send the progress updates to')
                .setRequired(true)),

    async execute(interaction, client) {
        // remove the < # > from the string
        const DISCORD_CHANNEL_ID = interaction.options.getString('channel').replace(/<#|>/g, '');
        // check if the channel exists
        if (client.channels.cache.has(DISCORD_CHANNEL_ID)) {
            async function sendDaysUntilNewYear() {
                const channel = await client.channels.fetch(DISCORD_CHANNEL_ID);
                const today = moment();
                const newYear = moment().add(1, 'year').startOf('year');
                const days = newYear.diff(today, 'days');

                const daysused = 365 - days;
                const progressBar = '▓'.repeat(Math.floor(daysused / 20)) + '░'.repeat(Math.floor(days / 20));
                // const daysused into percentage
                const percentage = Math.floor(daysused / 365 * 100);
                await channel.send(`**${days}** days until new year!`);
                await channel.send(progressBar + ' ' + percentage + '%');

            }
            // Task to send a message every week
            async function messageTask() {
                await client.channels.fetch(DISCORD_CHANNEL_ID);
                while (true) {
                    await sendDaysUntilNewYear();
                    await new Promise(resolve => setTimeout(resolve, 345600000)); // 4 days = 4 * 24 * 60 * 60 * 1000 milliseconds
                }
            }
            messageTask();
            await interaction.reply(`${interaction.user} Yearly Progress updates has been set to <#${DISCORD_CHANNEL_ID}> Channel`);
        } else {
            await interaction.reply(`Channel not found`);
            return;
        }
    },
}