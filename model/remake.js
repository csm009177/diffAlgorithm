import fs from 'fs'
/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */

export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }


  // * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
  const inputJSONdata = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONdata = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));
  // console.log(inputJSONdata, outputJSONdata);
  // * * 2. inputJSONdata, outputJSONdata의 value를 비교
  const inputObjKey = Object.values(inputJSONdata)   //for check
  const outputObjKey = Object.values(outputJSONdata) // array
  // console.log(inputObjKey, outputObjKey);
  // * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
  // 인풋데이터로 받은 것을 아웃풋데이터의 키에 같으면 same에 다르면 diff에 저장
  outputJSONdata[0] = inputJSONdata["operator"];
  // console.log(inputJSONdata["sameWords"])
  outputJSONdata[1] = inputJSONdata["operand"];

  // * * 4. differences.json 파일에 필요한 상태값

  // * * 5. fromDB-data.json 같은 단어가 무엇인지 저장

  // * * 6. fromDB-data.json 다른 단어가 무엇인지 저장


  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
  
  * * 7. 리턴을 통해 결과값을 전달
  */
  let result = outputJSONdata;
  return result;
}