// main.js
const fs = require('fs');

fs.readFile('test.json', 'utf8', (err, data) => {
  if (err) {
    console.error('파일을 읽어오는 동안 오류가 발생했습니다: ', err);
    return;
  }
  //
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});