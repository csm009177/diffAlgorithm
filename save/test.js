// // main.js
import fs from 'fs'
<<<<<<< HEAD:test.js
// readFile
=======
import diffLogic from '../model/diff-logic';

const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'


>>>>>>> c00c0da8ee510a5cf77aad425bfb8105cf3d6d39:save/test.js
fs.readFile('./data/fromDB-data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('error comment', err);
  }
  // parse data to obj
  const parseData = JSON.parse(data);
  console.log(parseData)
  // parse data to string
  const stringifyData = JSON.stringify(data);
  console.log(stringifyData)

});

diffLogic()
