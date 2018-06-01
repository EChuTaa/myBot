exports.run = (client, user, args, message) => {
    let messagecount = parseInt(result);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
}