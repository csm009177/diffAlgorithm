// built-in modules
import fs from 'fs';

// custom modules
import diffLogic from "./model/jun.js";

// json files path
const inputJSONPath = "./data/fromDB-data.json";
const outputJSONPath = "./data/differences.json";

// controller
const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);

// 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
