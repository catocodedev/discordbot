const { REST } = require('@discordjs/rest');
const { Routes, TeamMemberMembershipState, EmbedType } = require('discord-api-types/v9');
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});
const fetch = require ("node-fetch");

require('dotenv').config()

const prefix = process.env.prefix;
const footer = process.env.footer;
const modrole = process.env.modrole;
const gulagrole = process.env.gulagrole;
const regrole = process.env.regrole;
const rest = new REST({ version: '9' }).setToken(process.env.DIS_TOKEN);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

client.on('ready', () => {
    console.log(`Code Cato Ready!`);
    client.user.setActivity("Catoscript", {
      type: "PLAYING",
      });
});
client.on('guildMemberAdd', member => {
    client.channels.cache.get('908808701236899911').send("Welcome : " + member.displayName);
    member.roles.add(regrole); 
});
client.on("messageCreate", async (message) => {
  if (message.content.startsWith("CodeCato")) {
    message.channel.send("use C!help to see how i can help");
  }
  else if (message.content.startsWith(prefix + "info")){
    const InfoEmbed = new MessageEmbed()
    .setColor('#7ceb0d')
      .setTitle('Info')
      .setURL('')
    .addField('Code Cato', 'A Cato ran on code', true)
    message.channel.send({ embeds: [InfoEmbed] });
  }
  else if (message.content.startsWith(prefix + "help")){
    const HelpEmbed = new MessageEmbed()
      .setColor('#7ceb0d')
        .setTitle('Help')
        .setURL('')
      .addField('Code Cato Help Menu', 'Use C!help to veiw this at anytime', true)
      .addField(prefix +'info', 'get info on me', true)
      .addField(prefix +'meme', 'let me get a meme', true)
      .addField(prefix +'cat', 'let me get a cat', true)
      message.channel.send({ embeds: [HelpEmbed] });
  }
  else if (message.content.startsWith(prefix + "meme")){
    try {
      const response = await fetch(
        `https://meme-api.herokuapp.com/gimme`,
      );
      const data = await response.json();
      let len = data.preview.length - 1;
      const MemeEmbed = new MessageEmbed()
      .setColor('#7ceb0d')
        .setTitle(data.title)
        .setURL(data.postLink)
      .setImage(data.preview[len])
      .setFooter(data.author + " On r/" + data.subreddit)
        
        message.channel.send({ embeds: [MemeEmbed]});
    } catch (error) {
      message.channel.send('Oops, there was an error fetching the API');
      console.log(error);
    }
  }
  else if (message.content.startsWith(prefix + "cat")){
    try {
      const response = await fetch(
        `https://api.mythicalkitten.com/cats`,
      );
      const data = await response.json();
      const CatEmbed = new MessageEmbed()
      .setColor('#7ceb0d')
        .setTitle("Cat")
        .setURL(data.postLink)
      .setImage(data.url)
      message.channel.send({ embeds: [CatEmbed]});
    }
      catch (error) {
        message.channel.send('Oops, there was an error fetching the API');
        console.log(error);
      }
    }
    else if (message.content.startsWith(prefix + "modhelp")){
      if (message.member.roles.cache.has(modrole)){
        const HelpEmbed = new MessageEmbed()
        .setColor('#7ceb0d')
          .setTitle('Mod Cato Help')
          .setURL('')
        .addField('Cato Mod Help Menu', 'Use C!modhelp to veiw this at anytime', true)
        message.channel.send({ embeds: [HelpEmbed] });
      }else{
        message.delete()
        message.channel.send('woah you are not a Mod Cato!')
      }
    }
 else{
  }
});
  client.login(process.env.DIS_TOKEN);