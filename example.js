var parser = require('./index');

parser('sampleChat.txt')
.then(messages => console.log(messages))
.catch(e => console.log(e));