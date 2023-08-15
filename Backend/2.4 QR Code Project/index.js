/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    console.log("Enter URL.")
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('TtyError!');
    } else {
      // Something else went wrong
      console.log('Other Error!');

    }
  });




  var qr = require('qr-image');
 
  var qr_svg = qr.image('I love QR!', { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
   
  var svg_string = qr.imageSync('I love QR!', { type: 'svg' });




  import { watchFile } from 'node:fs';

  watchFile('message.text', (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
  });
