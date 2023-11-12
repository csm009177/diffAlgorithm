// import 
import fs from 'fs'
// declare path 
const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'

// diff logic Test
function difflogicTest(inputJSONPath, outputJSONPath) {
  // if not ends with '.json', throw new Error
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

  fs.readFile(outputJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('error comment', err);
    }
    const outputJsonData = JSON.parse(data);
    // console.log(outputJsonData.sameWords)
    commonWord.forEach((element)=>{
      outputJsonData.sameWords.push(element)
    })

    // fs.writeFile(outputJSONPath,JSON.stringify())
    console.log(outputJsonData)
    console.log(JSON.stringify(outputJsonData))
    


    // outputJsonData.sameWords.push(commonWord)
   
    // console.log(outputJsonData.differenceWords.push(differentWord))

  });
  
  let result = [];

  return result;
}

difflogicTest(inputPath, outputPath)
