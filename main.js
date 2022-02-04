const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS]
  });
require("dotenv").config();

client.commands = new Discord.Collection()
client.events = new Discord.Collection()


let handler = ['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.TOKEN)