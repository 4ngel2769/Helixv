const Discord = require('discord.js');
const client = new Discord.Client({disableMentions: "all"})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.token)
