const { parse: babelParse } = require("@babel/parser");
const { Identifier } = require("@babel/types");
const {CodeGenerator} = require("@babel/generator");
const { readFileSync, writeFileSync } = require("fs");
const pako = require("pako");
const json = JSON.parse(readFileSync("input.json", "utf8"));

function getNode(code) {
  return babelParse(code, {
    sourceType: "module",
    plugins: ["classProperties", "typescript"],
  });
}


let text = pako.inflateRaw((function _base64ToArrayBuffer(base64) {
    var binary_string = atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
})(json.data.code), { to: 'string' });

let rawCodePartBase64Encoded = text.split(":")[0];
let rawCodePart = atob(rawCodePartBase64Encoded);

let step1Ast = getNode(rawCodePart);
let step1Body = step1Ast.program.body;
let callExpression = step1Body[0].expression;
callExpression.arguments[0].callee.id = {
    type: "Identifier",
    name: "a"
}

let theStep2Code = null;
function yeppers() {
    theStep2Code = arguments[0];
}

// replace da eval call with yeppers()
callExpression.callee = {
    type: "Identifier",
    name: "yeppers"
}

// generate the code
let generatedCode = new CodeGenerator(step1Ast).generate().code;

// eval that thing
eval(generatedCode);

// parse stage 2 source
let step2Ast = getNode(theStep2Code);
let step2Body = step2Ast.program.body;

// find a CallExpression where the callee is eval, and replace it with yeppers
for (let i = 0; i < step2Body.length; i++) {
    let node = step2Body[i];
    if (node.type === "ExpressionStatement" && node.expression.type === "CallExpression" && node.expression.callee.type === "Identifier" && node.expression.callee.name === "eval") {
        node.expression.callee = {
            type: "Identifier",
            name: "yeppers"
        }
    }
}

// generate the code
let generatedCode2 = new CodeGenerator(step2Ast).generate().code;

// eval :)
eval(generatedCode2);
writeFileSync("output.js", theStep2Code);