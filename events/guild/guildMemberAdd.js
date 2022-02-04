module.exports = async (Discord, client, message, member) => {
    client.channels.cache.get('908808701236899911').send("Welcome : " + member.displayName);
    member.roles.add(regrole);
}