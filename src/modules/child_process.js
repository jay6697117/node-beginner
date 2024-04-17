// index.js
// import { helloModule1 } from './modules/test1/module1.js'

// helloModule1()

// import { helloModule2 } from './modules/test1/module2.js'

// helloModule2()

// // index.js
// const { helloModule1 } = require('./modules/test1/module1.js');

// helloModule1();

// const { helloModule2 } = require('./modules/test1/module2.js');

// helloModule2();

// main.js
// import { num, update } from './modules/test2/public.js'
// const { num, update } = require('./modules/test2/public.js')

// console.log(num)//1
// update()

// console.log(num)//1
// update()
// const path = require('path')
// const fs = require('fs')
// const util = require('util')
// const http = require('http')
const child_process = require('child_process')

// console.log('global :>> ', global)
// console.log('path :>> ', path);
// console.log('fs :>> ', fs);
// console.log('util :>> ', util);
// console.log('http :>> ', http);
console.log('child_process :>> ', child_process);
