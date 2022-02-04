require("dotenv").config();
module.exports = {
    name: "help",
    cooldown: 0,
    description: "Help page",
    execute(message, args, cmd, client, Discord) {
        let prefix = process.env.PREFIX
        
        const HelpEmbed = new Discord.MessageEmbed()
      .setColor('#7ceb0d')
        .setTitle('Help')
        .setURL('')
      .addField('Code Cato Help Menu', `Use ${prefix}help to view this at anytime`, true)
      .addField(prefix +'info', 'get info on me', true)
      .addField(prefix +'meme', 'let me get a meme', true)
      .addField(prefix +'cat', 'let me get a cat', true)
      message.channel.send({ embeds: [HelpEmbed] });
    }
  };