//Script courtesy of intoli @ https://intoli.com/blog/saving-images/
// const fs = require('fs');
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height: 926 });

//   let counter = 0;
//   page.on('response', async (response) => {
//     const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
//     if (matches && (matches.length === 2)) {
//       const extension = matches[1];
//       const buffer = await response.buffer();
//       fs.writeFileSync(`../img/image-${counter}.${extension}`, buffer, 'base64');
//       counter += 1;
//     }
//   });

//   await page.goto('https://www.freecodecamp.org/js-goose');
//   await page.waitFor(10000);

//   await browser.close();
// })();