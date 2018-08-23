var whatsappParser = require('./index');

whatsappParser('sampleChat.txt')
.then(messages => console.log(messages))
.catch(e => console.log(e));