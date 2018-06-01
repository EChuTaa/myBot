exports.run = (client, guild, speaking, oGuild, nGuild, user, member) => {

client.on('guildDelete', guild =>  {
    console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild =>  {
    guild.defaultChannel.sendMessage(`I have joined ${guild.name}`)
});

client.on('guildMemberAdd', memeber =>  {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member =>  {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildMemberSpeaking', (member, speaking) =>  {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user.username} is speaking!`);
});

client.on('guildMemberUpdate', (oGuild, nMember) =>  {
    console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate', (oGuild, nGuild) =>  {
    console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd', (guild, user) =>  {
    guild.defaultChannel.sendMessage(`${user.username} was just banned!`);
});

client.on('guildBanAdd', (guild, user) =>  {
    guild.defaultChannel.sendMessage(`${user.username} was just unbanned!`);
});

}