const chai = require('chai');
const moment = require('moment');
const expect = chai.expect;

// const expect = require('expect');
const whatsappParser = require('./index');

const properChatOutput = [ 
  { time: moment('8/8/18, 6:00 PM', "MM/DD/YY, hh:mm a").toDate(),sender: 'The Chechen',msg: 'What do you propose?' },
  { time: moment('8/8/18, 6:01 PM', "MM/DD/YY, hh:mm a").toDate(),sender: 'The Joker',msg: 'It\'s simple. We, uh, kill the Batman.' },
  { time: moment('8/8/18, 6:03 PM', "MM/DD/YY, hh:mm a").toDate(),sender: 'Salvatore Maroni',msg: 'If it\'s so simple, why haven\'t you done it already?' },
  { time: moment('8/8/18, 6:04 PM', "MM/DD/YY, hh:mm a").toDate(),sender: 'The Joker',msg: 'If you\'re good at something, never do it for free.' } 
];

describe('Parser', () => {

  describe('Parsing exported chat file', () => {
    it ('Should parse proper chat file', async () => {
      var res;
      await whatsappParser('sampleChat.txt')
      .then(messages => {
        res = messages;
      });
      expect(res).to.be.a('array').to.deep.equal(properChatOutput);
    });

    it('Should return error for invalid file', (done) => {
      var res;
      whatsappParser('wrongFile.txt')
      .then(messages => {
        res = messages;
      })
      .catch(err => {
        expect(err).to.be.a('error')
      })
      done();
    });
  });
});
