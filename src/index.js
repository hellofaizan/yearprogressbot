const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, ActivityType } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // setInterval(() => {
    //     let random = Math.floor(Math.random() * status.length);
    //     client.user.setPresence(status[random]);
    // }, 10000);
    client.user.setPresence({ activities: [
        { name: `𝕏 •• xxx.hellofaizan.me`, type: ActivityType.Playing },
    ] });
    console.log(`Ready to serve ${client.guilds.cache.size} servers!`);

});

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

