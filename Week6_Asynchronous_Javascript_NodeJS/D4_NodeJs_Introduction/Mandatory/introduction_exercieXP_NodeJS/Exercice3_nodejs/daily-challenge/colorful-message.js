/*  

node colorful-message.js

const chalk = require('chalk');
import chalk from 'chalk';

*/

import chalk from 'chalk';


export function displayColor(){
  console.log(chalk.blue(' Hello This a blue message'));
  console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring🎉') +
    ' that becomes green again🎁!'
  ));
  
}

displayColor()


