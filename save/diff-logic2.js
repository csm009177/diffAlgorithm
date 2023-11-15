// import 
import fs from 'fs'
<<<<<<< HEAD:model/test.js
import path from 'path';

const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'


// 
function difflogicTest(inputJSONPath, outputJSONPath) {

=======
// declare path 
const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'

// diff logic Test
export function difflogicTest(inputJSONPath, outputJSONPath) {
  // if not ends with '.json', throw new Error
>>>>>>> c00c0da8ee510a5cf77aad425bfb8105cf3d6d39:save/diff-logic2.js
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }
  // init commonWord
  const commonWord = []
  const differentWord = []
  // ReadFile / convert format / divide by state
  fs.readFile(inputJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('error comment', err);
    }
    // JSON 형식의 String을 JS 객체로 변환
    const inputJsonData = JSON.parse(data);
    // access parsed JSON data 
    const operator = inputJsonData.operator 
    const operand = inputJsonData.operand
    // split 
    const splitOperatorWord = operator.split(" ")
    const splitOperandWord = operand.split(" ")
    // 각 요소에 대해 
    splitOperatorWord.forEach((element)=>{
      // 요소가 요소를 포함하고 있으면(같은 것이 있으면) 
      if(splitOperandWord.includes(element)){
        // commonWord에 푸시하고
        commonWord.push(element)
      } else{ // 아니면 dfferentWord에 푸시
        differentWord.push(element)
      }
    }) // print
    console.log(commonWord)
    console.log(differentWord)    
  });
  
  // 다르다고 분류한 각 요소들을 
  fs.readFile(outputJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('error comment', err);
    }
    // JSON 형식의 String을 JS 객체로 변환
    const outputJsonData = JSON.parse(data);
    console.log(outputJsonData.sameWords)
    // 각 요소에 대해 
    commonWord.forEach((element)=>{
      // outputJSONPath의 sameWords에 푸시
      outputJsonData.sameWords.push(element)
    })
    
    fs.writeFile(outputJSONPath,JSON.stringify())
    console.log(outputJsonData)
    console.log(JSON.stringify(outputJsonData))
    


    // outputJsonData.sameWords.push(commonWord)
   
    // console.log(outputJsonData.differenceWords.push(differentWord))

  });
  
  let result = [];

  return result;
}

difflogicTest(inputPath, outputPath)

