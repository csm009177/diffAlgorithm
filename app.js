// built-in modules
import http from "http"
import fs from "fs";

// custom modules
import diffLogic from "./model/diff-logic.js";

// json files path
const inputJSONPath = "./config/fromDB-data.json";
const outputJSONPath = "./config/differences.json";

// controller

const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);