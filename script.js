var _ = require('lodash');

const arrayWord = ['Hi','Howdy','Holla','Hello','Hey'];

const arrayWordShuffle = _.shuffle(arrayWord);

const arrayNum = [1,2,3,4,5];

const arrayNumShuffle = _.shuffle(arrayNum);

console.log('Here is your result:')

console.log(_.repeat(`${arrayWordShuffle[0]} `,arrayNumShuffle[0]));