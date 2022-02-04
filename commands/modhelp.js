module.exports = {
    name: "modhelp",
    description: "Mod Help",
    execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has(modrole)){
            const HelpEmbed = new Discord.MessageEmbed()
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
  };