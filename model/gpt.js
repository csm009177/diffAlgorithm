import fs from 'fs';

export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }

  // 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
  const inputJSONdata = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONdata = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));

  // 2. inputJSONdata, outputJSONdata의 value를 비교
  const inputValues = Object.values(inputJSONdata);
  const outputValues = Object.values(outputJSONdata);

  // 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
  const same = [];
  const diff = [];
  const newinputval = inputValues.join(' ').split(' ')
  newinputval.forEach((element) => {
    if (outputValues.includes(element)) {
      same.push(element);
    } else {
      diff.push(element);
    }
  });

  outputJSONdata["sameWords"] = same;
  outputJSONdata["differentWords"] = diff;

  // 4. differences.json 파일에 필요한 상태값
  // 이 부분은 문제의 설명이 더 필요합니다.

  // 5. fromDB-data.json 같은 단어가 무엇인지 저장
  // 이 부분도 문제의 설명이 더 필요합니다.

  // 6. fromDB-data.json 다른 단어가 무엇인지 저장
  // 이 부분도 문제의 설명이 더 필요합니다.

  // 7. 수정된 내용을 파일로 저장
  fs.writeFileSync(outputJSONPath, JSON.stringify(outputJSONdata, null, 2));

  // 8. 리턴을 통해 결과값을 전달
  return outputJSONdata;
}