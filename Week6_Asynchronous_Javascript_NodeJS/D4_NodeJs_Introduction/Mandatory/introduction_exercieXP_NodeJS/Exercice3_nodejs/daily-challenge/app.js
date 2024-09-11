/*

node app.js 

const greet = require('./greeting.js');
const displayColor = require ('./colorful-message.js')
*/

import { greet } from './greeting.js';
import { readFile } from './read-file.js';


const GreetingMessage = greet('Boby');

console.log(GreetingMessage);
import {displayColor} from './colorful-message.js'


readFile()
displayColor()