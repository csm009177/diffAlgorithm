import fs from "fs";
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
  let result = {};
  const inputJSONdata = fs.readFileSync(inputJSONPath, 'utf8') // fromDB 파일 읽음
  const outputJSONdata = fs.readFileSync(outputJSONPath, 'utf8') // differences.json 파일 읽음
  const inputJSONObject = JSON.parse(inputJSONdata); // json을 script언어로 변환
  const outputJSONObject = JSON.parse(outputJSONdata);

  const operatorInput = inputJSONObject.operator; // 그리고 객체 접근
  const operandInput = inputJSONObject.operand;


  const operatorInputWords = operatorInput.split(' '); // 접근한 밸류 문자열 단어로 쪼갬 '' 단위로
  const operandInputWords = operandInput.split(' ');

  function removePunctuation(text) {
    return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); // 정규식으로 마침표.물음표같은 특수 문자 제거식
  }
  const cleanOperatorInputWords = operatorInputWords.map(word => removePunctuation(word)); // 특수 문자 제거
  const cleanOperandInputWords = operandInputWords.map(word => removePunctuation(word));

  const commonOperatorWords = cleanOperatorInputWords.filter(word => cleanOperandInputWords.includes(word));  // 같은 단어 필터
  const differentOperatorWords = cleanOperatorInputWords.filter(word => !cleanOperandInputWords.includes(word)); // 다른 단어 필터


  outputJSONObject.sameWords = commonOperatorWords; // differences.json 에 sameWords에 접근하여 할당
  outputJSONObject.differenceWords = differentOperatorWords;// 마찬가지로 diwords에 접근하여 할당

  result = outputJSONObject;
  return result;
}

  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장 >> 일단 할당만 했음 저장은 그냥 넣으면 됨
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * >> 근데왜 fs모듈은 diff 가아닌 app.js에 불러옴?? fs읽는건 diff로직에서 하는것 아닌가?
   * json files path
      const inputJSONPath = "./data/fromDB-data.json";
      const outputJSONPath = "./data/differences.json"; >> 경로를 data폴더로 가야되는거 아닌가? 왜 config폴더로 되어있지?
   * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환 >> 위에 데이터를 경로로 잘 지정해놔야하나?
   * * 2. inputJSONdata, outputJSONdata의 value를 비교 >> ?? 어째서? fromDB-data.json에서  operator문장과  operand문장을 읽으려 하는거 아닌가?
   * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
   * * 4. dirrences.json 파일에 필요한 상태값 >> ?? dirrences.json이 뭐지? differences.json???
   * * 5. 같은 단어가 무엇인지 저장 >> 일단 .접근을 통해 할당만했음
   * * 6. 다른 단어가 무엇인지 저장 >> 일단 .접근을 통해 할당만했음 
   * * 7. 리턴을 통해 결과값을 전달 >> ok
   * *1. React.js 와 같은 SPA 프레임워크 기본 접근
  * *2. Database 기초 접근법
      3. 프로젝트 구조제작(architecting)
      4. JSON 처리
      5. Javascript 배열(Array) 메서드 활용
      6. Javascript 문자열(String) 메서드 활용
       7. function return 개념복습 및 closure 테크닉 기초 마련
      8. Node.js file system 이해
      9. ESM module 처리 훈련
      10. 기술문서(interface document) 독해 능력 향상
      11. 자연어(Natural language) 패턴 소개
  */