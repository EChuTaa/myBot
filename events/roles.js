exports.run = (client, member) => {
client.on('roleCreate', role => {
    let guild = role.guild;
    guild.defaultChannel.sendMessage(`A new role called ${role.name} has been created`)
});

client.on('roleDelete', role =>  {
    let guild = role.guild;
    guild.defaultChannel.sendMessage(`A new role called ${role.name} has been deleted`)
});

client.on('roleUpdate', (oRole, nRole) =>  {
    console.log(ddiff(oRole, nRole));
});
}