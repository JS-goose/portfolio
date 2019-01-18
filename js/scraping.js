const puppeteer = require('puppeteer');

const heatMap = await page.evaluate(() => {
  const svgImg = document.querySelector('#cal-heatmap');
  const points = document.querySelector('.text-center points')
})

// void (async () => {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto('https://www.freecodecamp.org/js-goose');
//         await page.screenshot({path : '../img/page1.png'});
//         await page.pdf({path: '../img/page1.pdf'});
//         await browser.close();
//     } catch(error) {
//         console.error(`There was an error: ${error}`)
//     }
// })();