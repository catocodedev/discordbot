module.exports = {
    name: "cat",
    description: "Cato",
    async execute(message, args, cmd, client, Discord) {
        try {
            const response = await fetch(
              `https://api.mythicalkitten.com/cats`,
            );
            const data = await response.json();
            const CatEmbed = new Discord.MessageEmbed()
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
};