import fs from 'fs'
// const path = require('path')

const inputPath = '../data/fromDB-data.json'
const outputPath = '../data/differences.json'

function difflogicTest(inputJSONPath, outputJSONPath) {

  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }

  const commonWord = []
  const differentWord = []
  fs.readFile(inputJSONPath, 'utf8', (err, data) => {
    if (err) {
      console.error('error comment', err);
    }
    const inputJsonData = JSON.parse(data);
    const operator = inputJsonData.operator 
    const operand = inputJsonData.operand

    const splitOperatorWord = operator.split(" ")
    const splitOperandWord = operand.split(" ")


    splitOperatorWord.forEach((element)=>{
      if(splitOperandWord.includes(element)){
        commonWord.push(element)
      } else{
        differentWord.push(element)
      }
    })
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
