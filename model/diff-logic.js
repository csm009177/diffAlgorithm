import fs, { writeFileSync } from 'fs'
import path from 'path'
const line = `\n-------------------------------------\n`
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
  // * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
  const inData = JSON.parse( fs.readFileSync(inputJSONPath, 'utf8') )
  const outData = JSON.parse( fs.readFileSync(outputJSONPath, 'utf8') )
  // console.log(`inData:${inData}\noutData:${outData} `)
  // * 2. inputJSONPath의 operator, operand의 value를 비교
  const inVals = Object.values(inData)
  const inVal0 = Object.values(inData)[0]
  const inVal1 = Object.values(inData)[1]
  // console.log(`${line}inVal0 : ${inVal0}${line}inVal1 : ${inVal1}${line}`)
  // * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
  // * 3-1 해당하는 빈칸의 상태를 조회
  const outKey0 = Object.keys(outData)[0]
  const outKey1 = Object.keys(outData)[1]
  // console.log(`${line}outKey0 : ${outKey0}${line}outKey1 : ${outKey1}${line}`)
  // 4. dirrences.json 파일에 필요한 상태값 >>>>>>
  // * 5. 같은 단어가 무엇인지 저장
  // * 5-1. 단어에 붙어있는 특수문자 제거
  // 각 벨류의 값들을 하나의 문장으로 만든다 * 문장들이 서로 붙지 않도록 ' ' 를 통해서 띄운다
  const allinWords = JSON.stringify(inVal0+' '+inVal1).split(' ')
  // console.log(`${line}typeof allinWords : ${typeof(allinWords)}${line}${allinWords}${line}`)
  // 각 요소들의 특수문자를 지우자
  function removeChar(words) {
    return words.replace(/[^a-zA-Z0-9]/g, '');
  }
  const wordsOnlyChar = allinWords.map(removeChar);
  console.log(`${line}wordsOnlyChar :`)
  console.log(wordsOnlyChar)
  // * 5-2. 서로 중복되는 단어를 조회하여 하나의 배열로 만들자
  // const uniqueWordsArray = Array.from(new Set(wordsArray));
  // console.log(uniqueWordsArray);
  const same = [];
  const diff = [];
  wordsOnlyChar.forEach((element) => {
  if (element.includes(element)) {
    same.push(element);
  }else {
    diff.push(element);
  }
  });
  console.log(`${line}same :`)
  console.log(same)
  console.log(`${line}diff :`)
  console.log(diff+line)
  // * 5-2. 같은 단어의 배열을 sameWords에 매칭시키자
  outData[outKey0] = same;
  // * 6. 다른 단어가 무엇인지 저장
  outData[outKey1] = diff;
  // * 7. 리턴을 통해 결과값을 전달
  fs.writeFileSync(outputJSONPath, JSON.stringify(outData, null, 2))
  let result = outData;
  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   */
  return result;
}