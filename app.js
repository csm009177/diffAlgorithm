// built-in modules
import http from "http"
import fs from "fs";

// 1. react(SPA) 기본 접근방법
// 1-1. npm install react react-dom => 
// 1-2. react 불러오기
import React from 'react';
import ReactDOM from 'react-dom';
// 1-3 declare react component 
class comp extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  }
}



// 1. 
http.createServer((res,req)=> {
  if(req.method==="GET"&& req.url==="/"){
    fs.readFile("index.html", (err, data)=> {
      if(err){ console.log("readFile err")
      } else{
        res.writeHead()
        res.end()
      }
    })
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