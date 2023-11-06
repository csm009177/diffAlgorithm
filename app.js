// built-in modules
import http from "http"
import fs from "fs";

http.createServer((res,req)=> {
  if(req.method==="GET"&& req.url==="/"){
    
  }
})



// custom modules
import diffLogic from "./model/diff-logic.js";

// json files path
const inputJSONPath = "./config/fromDB-data.json";
const outputJSONPath = "./config/differences.json";

// controller

const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);