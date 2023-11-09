// // main.js
const fs = require('fs');
fs.readFile('test.json', 'utf8', (err, data) => {
  if (err) {
    console.error('error comment', err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});

