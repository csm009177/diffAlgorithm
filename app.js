// built-in modules
import fs from 'fs';

// custom modules
import diffLogic from "./model/nom1.js";

// json files path
const inputJSONPath = "./save/fromDB-data.json";
const outputJSONPath = "./save/differences.json";

// controller
const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);

// 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
