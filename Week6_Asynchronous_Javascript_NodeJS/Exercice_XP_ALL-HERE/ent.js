#!/usr/bin/env node

import { exec } from 'child_process';

exec('node Ex1_blog-api/server.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Standard Error: ${stderr}`);
    return;
  }

  console.log(`Output:   

${stdout}`);
});
// instaed running all the time and fetching to many module i found that i have 8gram end dont want work 10 time more that what i can above
// was very bad idea i started learning well but not on what i needed !! go back to node moon heaven if it will take me lot of data
// misundersing of nodemon much better than create one !
