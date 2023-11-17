import fs from 'fs';
/**
 *
 * @param {JSON, Path} inputJSONPath
 * @param {JSON, Path} outputJSONPath
 * @returns Object
 */
export default function(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }
  // Step 1: inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
  const inputJSONdata = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONdata = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));
  let result = {};
  return result;
}