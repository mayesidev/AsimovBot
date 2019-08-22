const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  // Don't respond to messages without the prefix or from other bots
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content === (config.prefix + "ping")) {
    message.channel.send("pong!");
  }
});
 
client.login(config.token);