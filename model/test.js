import fs from 'fs';

export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }

  const inputJSONdata = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONdata = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));

  const outputobjKey = Object.keys(outputJSONdata);
  const inputobjKey = Object.keys(inputJSONdata);

  // 4. differences.json 파일에 필요한 상태값
  const differences = {};
  for (const key of inputobjKey) {
    const cleanedKey = key.replace(/[,.]/g, ''); // 쉼표(,)와 마침표(.) 제거
    differences[cleanedKey] = {
      input: inputJSONdata[key],
      output: outputJSONdata[key] || null, // 해당 키가 outputJSONdata에 없는 경우 처리
    };
  }

  // 5. fromDB-data.json 같은 단어가 무엇인지 저장
  const fromDBData = {};
  for (const key of outputobjKey) {
    const cleanedKey = key.replace(/[,.]/g, ''); // 쉼표(,)와 마침표(.) 제거
    fromDBData[cleanedKey] = outputJSONdata[key];
  }

  // 6. fromDB-data.json 다른 단어가 무엇인지 저장
  const differentWords = {};
  for (const key of inputobjKey) {
    if (!outputobjKey.includes(key)) {
      const cleanedKey = key.replace(/[,.]/g, ''); // 쉼표(,)와 마침표(.) 제거
      differentWords[cleanedKey] = inputJSONdata[key];
    }
  }

  // JSON 파일로 저장
  fs.writeFileSync('test/differences.json', JSON.stringify(differences, null, 2));
  fs.writeFileSync('test/fromDB-data.json', JSON.stringify(fromDBData, null, 2));
  fs.writeFileSync('test/differentWords.json', JSON.stringify(differentWords, null, 2));

  // 7. 리턴을 통해 결과값을 전달
  const result = {
    differences: differences,
    fromDBData: fromDBData,
    differentWords: differentWords,
  };

  return result;
}
