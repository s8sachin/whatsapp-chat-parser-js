var fs = require('fs');

module.exports = async (file) => {
  let myLines = fs.readFileSync(file).toString();
  myLines = myLines.split(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}, [0-9]{1,2}:[0-9]{1,2}\s?[A-z]{0,2} - )/gm||[]).filter(e => e);
  let messages = [];
  for(let i = 0; i < myLines.length; i++) {
    let time = myLines[i].replace(/ - /, '');
    let chat = myLines[i+1] && myLines[i+1].split(/: (.+)?/);
    let sender, msg;
    if (chat) {
      if(chat[1]) {
        sender = chat[0];
        msg = chat[1].replace(/\n/g, " ");
      } else {
        sender = 'Announcement';
        msg = chat[0].replace(/\n/g, " ");
      }
      i = i+1;
      messages.push({
        time, sender, msg
      });
    }
  }
  return messages;
}
