exports.run = (client, channel, oChannel, nChannel, time, messages) => {
client.on('channelCreate', channel => {
    console.log(`A ${channel.type} by the name of ${channel.name} and was ${channel.createdAt} with the ID of ${channe.id}`);
    channel.sendMessage('You were successful in creating this channel.');
});

client.on('channelDelete', channel => {
    console.log(`A ${channel.type} by the name of  ${channel.name} was successfully deleted.`)
    channel.guild.defaultChannel.sendMessage('Channel Deleted')
});

client.on('channelUpdate', (oChannel, nChannel) => {
    console.log(ddiff(oChannel, nChannel));
});

client.on('channelPinsUpdate', (channel, time) => {
    channel.guild.defaultChannel.sendMessage(`The pins for ${channel.name} have been updated at ${time}`);
});

client.on('messageDelete', message => {
    console.log(`A message with the contents ${message.cleanContent} was deleted from ${message.channel}`);
});

client.on('messageDeleteBulk', messages => {
    console.log(`${message.size} were deleted`);
});
}
