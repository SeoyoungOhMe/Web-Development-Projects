/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
//import readline from 'readline';
import qr from 'qr-image'; // var qr = require('qr-image');
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type : 'input',
      name : 'url',
      message : 'Write : '
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(typeof(answers)); // object
    const url = answers.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    
    var svg_string = qr.imageSync('I love QR!', { type: 'png' });

    fs.writeFile("message.txt", url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("error1");
    } else {
      // Something else went wrong
      console.log("error2");
    }
  });




