const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    // Don't respond to messages without the prefix or from other bots
    if (message.content.indexOf(config.prefix) !== 0 || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/\s+/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case "look":
            const followUp = args.join(" ");
            switch (followUp) {
                case "at my horse":
                    message.channel.send("My horse is amazing!\nhttps://media1.tenor.com/images/59b423ec998cdb6f513accd346c088be/tenor.gif?itemid=5297943");
                    break;
                case "a monkey":
                    message.channel.send("Hey- I'm chubby, but I'm quick!\nhttps://thumbs.gfycat.com/FocusedUnsteadyKinkajou-mobile.mp4");
                    break;
            }
            break;
        case "ping":
            message.channel.send("pong!");
            break;
        case "pong":
            message.channel.send("hey, that's my line!");
            break;
        case "say":
            let text = args.join(" ");
            message.delete();
            message.channel.send(text);
        // Don't respond to unrecognized commands.
        default:
            return;
    }
});

client.login(config.token);