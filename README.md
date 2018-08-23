# whatsapp-chat-parser

This is whatsapp chat parser for exported whatsapp chat.

## instructions

### 1. install to your project.
```
npm install whatsapp-chat-parser --save
```

### 2. import.
```
const whatsappParser = require('whatsapp-chat-parser')
```

### 3. usage
```
whatsappParser('sampleChat.txt')
.then(messages => console.log(messages))
.catch(e => console.log(e));
```
### sampleChat.txt
```
8/8/18, 6:00 PM - The Chechen: What do you propose?
8/8/18, 6:01 PM - The Joker: It's simple. We, uh, kill the Batman.
8/8/18, 6:03 PM - Salvatore Maroni: If it's so simple, why haven't you done it already?
8/8/18, 6:04 PM - The Joker: If you're good at something, never do it for free.
```

### Output
```
[ { time: '8/8/18, 6:00 PM',
    sender: 'The Chechen',
    msg: 'What do you propose?' },
  { time: '8/8/18, 6:01 PM',
    sender: 'The Joker',
    msg: 'It\'s simple. We, uh, kill the Batman.' },
  { time: '8/8/18, 6:03 PM',
    sender: 'Salvatore Maroni',
    msg: 'If it\'s so simple, why haven\'t you done it already?' },
  { time: '8/8/18, 6:04 PM',
    sender: 'The Joker',
    msg: 'If you\'re good at something, never do it for free.' } ]
```
    
## Fork it. and contribute your ideas :)