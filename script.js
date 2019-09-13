var _ = require('lodash');
var robot = require("robotjs");

//Lodash
const arrayWord = ['Hi','Howdy','Holla','Hello','Hey'];

const arrayWordShuffle = _.shuffle(arrayWord);

const arrayNum = [1,2,3,4,5];

const arrayNumShuffle = _.shuffle(arrayNum);

console.log('Here is your result:')

console.log(_.repeat(`${arrayWordShuffle[0]} `,arrayNumShuffle[0]));

// RobotJS

// Moves mouse pointer
robot.setMouseDelay(1);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}

// Types some words
robot.typeString('I AM A FELLOW HUMAN AND NOT A ROBOT');