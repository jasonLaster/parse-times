const text = read("debugger.js");
const t1 = Date.now();
let i = 0;
while (i++ < 10) {
    const t2 = Date.now();
    const ast = Reflect.parse(text)
    const t3 = Date.now();
    console.log('parse ' , t3 - t2);
}

const times = Date.now() - t1;
console.log(`time: ${times} - avg ${times / i}`);
