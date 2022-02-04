module.exports = {
    name: "meme",
    description: "Meme command",
    async execute(message, args, cmd, client, Discord) {
        try {
            const response = await fetch(
              `https://meme-api.herokuapp.com/gimme`,
            );
            const data = await response.json();
            let len = data.preview.length - 1;
            const MemeEmbed = new Discord.MessageEmbed()
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
  };