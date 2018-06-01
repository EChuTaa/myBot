exports.run = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
 client.channels.get('451050286652325898').send("Im Ready!");
 client.user.setActivity('Extremely Bad SCPs', { type: 'Watching'});
}
