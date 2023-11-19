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
  // * * 2. inputJSONdata, outputJSONdata의 value를 비교
  // console.log(`inputJSONdata  : ${inputJSONdata}`)
  // console.log(`outputJSONdata : ${outputJSONdata}`)
  // * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
  const inputObjKey = Object.keys(inputJSONdata)   //for check
  const outputObjKey = Object.keys(outputJSONdata)
  // console.log(`inputObjKey  : ${inputObjKey}`) 
  // console.log(`outputObjKey : ${outputObjKey}`)

  for (const key in inputJSONdata) {
    const value = inputJSONdata[key];
    console.log(`inputJSONdataKey: ${key}, inputJSONdataValue: ${value}`);
  }

  // const value = []
  // for (const key in inputJSONdata) {
  //   value = inputJSONdata[key];
  //   return value
  // }

  // for (const keys in inputJSONdata) {
  // const newObject = inputJSONdata[keys]; 
  // return console.log(newObject)
  // }



  // * * 4. differences.json 파일에 필요한 상태값

  // * * 5. fromDB-data.json 같은 단어가 무엇인지 저장

  // * * 6. fromDB-data.json 다른 단어가 무엇인지 저장


  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
  
  * * 7. 리턴을 통해 결과값을 전달
  */
 
 let result = {};
  return result;
}