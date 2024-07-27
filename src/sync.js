// 1.1 常见的同步方法
// const { readFileSync } = require('fs')
// console.log(1)
// readFileSync(__filename, () => {
//   console.log(3)
// })
// console.log(2)

// 1.2 实现同步 fetch
// const { execSync } = require('child_process');

// function fetchSync(url, options = {}) {
//   const child = execSync(`curl -s -X GET "${url}"`, {
//     input: JSON.stringify(options)
//   });

//   // 子进程的标准输出即为请求结果
//   const result = child.toString();

//   try {
//     const responseData = JSON.parse(result);
//     return responseData;
//   } catch (error) {
//     console.error('JSON 解析错误:', error);
//     return null;
//   }
// }

// console.log(1);
// console.log(
//   fetchSync(
//     'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
//   )
// );
// console.log(2);

// 2 异步回调函数
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(1);
// fs.readFile(path.resolve(__dirname, './fork.js'), (err, data) => {
//   console.log(2)
//   console.log('-----------');
//   console.log(data.toString())
//   console.log('-----------');
// });
// console.log(3);

// 2.2 回调地狱
// import fs from 'fs'

// const fileA = 'index.mjs'
// const fileB = 'index.mjs'
// const fileC = 'index.mjs'
// fs.readFile(fileA, (err, dataA) => {
//   console.log('File A content:')

//   fs.readFile(fileB, (err, dataB) => {
//     console.log('File B content:')

//     fs.readFile(fileC, (err, dataC) => {
//       console.log('File C content:')
//     })
//   })
// })


import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__dirname :>> ', __dirname);

const fileA = path.resolve(__dirname, './fork.js');
const fileB = path.resolve(__dirname, './sync.js');
const fileC = path.resolve(__dirname, './hello.js');
async function main() {
  try {
    const dataA = await fs.readFile(fileA);
    console.log('File A content:\n', dataA.toString());
    console.log('----------------');
    const dataB = await fs.readFile(fileB);
    console.log('File B content:\n', dataB.toString());
    console.log('----------------');
    const dataC = await fs.readFile(fileC);
    console.log('File C content:\n', dataC.toString());
    console.log('----------------');
  } catch (err) {
    console.log('err :>> ', err);
  }
}

main();
