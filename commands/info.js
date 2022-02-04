module.exports = {
    name: "info",
    description: "Info page",
    execute(message, args, cmd, client, Discord) {
        const InfoEmbed = new Discord.MessageEmbed()
    .setColor('#7ceb0d')
      .setTitle('Info')
      .setURL('')
    .addField('Code Cato', 'A Cato ran on code', true)
    message.channel.send({ embeds: [InfoEmbed] });
    }
  };