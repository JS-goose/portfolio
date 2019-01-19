const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 926 });

  let counter = 0;
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
    if (matches && (matches.length === 2)) {
      const extension = matches[1];
      const buffer = await response.buffer();
      fs.writeFileSync(`../img/image-${counter}.${extension}`, buffer, 'base64');
      counter += 1;
    }
  });

  await page.goto('https://freecodecamp.org/js-goose');
  await page.waitFor(10000);

  await browser.close();
})();

// const url = process.argv[2];
// if (!url) {
//   throw "Please provide a URL as the first argument!";
// }

// function run() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
//       await page.goto("https://www.freecodecamp.org/js-goose");
//       let data = await page.evaluate(() => {
//         let results = [];
//         const points = document.querySelector(".text-center points");
//         return results.push(points);
//       });
//       browser.close();
//       return resolve(data)
//     } catch (error) {
//       return reject(`Error in promise: ${error}`);
//     }
//   });
// }
// run().then(console.log).catch(console.error);

// void (async () => {
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://www.freecodecamp.org/js-goose");

//     const heatMap = await page.evaluate(() => {
//       const svgImg = document.querySelector("#cal-heatmap");
//       const points = document.querySelector(".text-center points");
//       console.log(points);
//     });
//     await browser.close();
//   } catch (error) {
//     console.error(`There was an error: ${error}`);
//   }
// })();
