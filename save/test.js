// // main.js
import fs from 'fs'
import diffLogic from '../model/diff-logic';

const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'


fs.readFile('./data/fromDB-data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('error comment', err);
    return;
  }
  const parseData = JSON.parse(data);
  console.log(parseData)
  const stringifyData = JSON.stringify(data);
  console.log(stringifyData)

});

diffLogic()
