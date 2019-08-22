const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    // Don't respond to messages without the prefix or from other bots
    if (message.content.indexOf(config.prefix) !== 0 || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/s+/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case "ping":
            message.channel.send("pong!");
            break;
        case "pong":
            message.channel.send("hey, that's my line!");
            break;
        // Don't respond to unrecognized commands.
        default:
            return;
    }
});

client.login(config.token);