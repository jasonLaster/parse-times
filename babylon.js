const fs = require('fs');
const babylon = require('babylon');

const text = fs.readFileSync("debugger.js", "utf8");

const t1 = Date.now();
let i = 0;
while (i++ < 10) {
    const t2 = Date.now();
    const ast = babylon.parse(text)
    const t3 = Date.now();
    console.log('parse ' , t3 - t2);
}
const times = Date.now() - t1;
console.log(`time: ${times} - avg ${times / i}`);
