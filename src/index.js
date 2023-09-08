const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, ActivityType, channelLink } = require(`discord.js`);
const fs = require('fs');
const moment = require('moment')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { connectToMongo, clientdb } = require('./db');

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    connectToMongo()
        .then(() => {
            retreveData()
        })
        .catch((error) => {
            console.log(error)
        })
    client.user.setPresence({
        activities: [
            { name: `𝕏 •• xxx.hellofaizan.me`, type: ActivityType.Playing },
        ]
    });
    console.log(`Ready to serve ${client.guilds.cache.size} servers!`);

});

async function retreveData() {
    try {

        const collection = clientdb.db('yearlyProgress').collection('servers')
        const data = await collection.find({}).toArray()
        
        data.map(function (item) {

            const channel = item.channel

            async function sendDaysUntilNewYear() {
                const today = moment();
                const newYear = moment().add(1, 'year').startOf('year');
                const days = newYear.diff(today, 'days');

                const daysused = 365 - days;
                const progressBar = '▓'.repeat(Math.floor(daysused / 20)) + '░'.repeat(Math.floor(days / 20));

                const mainChannel = client.channels.cache.get(channel)
                
                // const daysused into percentage
                const percentage = Math.floor(daysused / 365 * 100);
                mainChannel.send(`We wasted **${daysused}** days in ${newYear.format('YYYY') - 1}. Just ${days} left`);
                mainChannel.send(progressBar + ' ' + percentage + '%');

            }
            // Task to send a message every week
            async function messageTask() {
                await channel
                while (true) {
                    await sendDaysUntilNewYear();
                    await new Promise(resolve => setTimeout(resolve, 345600000)); // 4 days = 4 * 24 * 60 * 60 * 1000 milliseconds
                }
            }
            messageTask();
        })
    } catch (error) {
        console.log(error)
    }

}



(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

