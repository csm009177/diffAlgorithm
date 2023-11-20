import fs from 'fs';

export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }

  // 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
  const inputJSONdata = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONdata = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));
  // 3-1. 키의 값을 조회
  const inputObjKey = Object.keys(inputJSONdata); // for check
  const outputObjKey = Object.keys(outputJSONdata);

  // console.log(`3-1..inputObjKey  : ${inputObjKey}`);
  // console.log(`3-1..outputObjKey : ${outputObjKey}`);

  // 3-2. 키에 해당하는 값을 하나의 객체에 담아 배열에 저장
  const resultArray = [];

  for (const key of inputObjKey) {
    const inputValue = inputJSONdata[key];
    const outputValue = outputJSONdata[key];

    const resultObj = {
      key: key,
      inputValue: inputValue,
      outputValue: outputValue,
    };
    // {
    //   "sameWords": [],
    //   "differenceWords": [],
    //   "operator": "Prepare for the future, but live in the present.",
    //   "operand": "Live the present and give up the future"
    // }

    resultArray.push(resultObj);
  }

  // 3. outputJSONdata에 inputJSONdata를 추가
  for (const key in inputJSONdata) {
    outputJSONdata[key] = inputJSONdata[key];
    fs.writeFileSync(outputJSONPath, JSON.stringify(outputJSONdata, null, 2));
  }

  // 4. outputJSONdata를 파일로 저장

  // 결과를 리턴
  return resultArray;
}