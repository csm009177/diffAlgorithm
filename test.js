// // main.js
import fs from 'fs'
// readFile
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


