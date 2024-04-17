// import fs from 'fs';
import { default as fsPromises } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, default as path } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testDir = path.resolve(__dirname, './test.txt');


// 同步读取
// const syncData = fs.readFileSync(testDir, 'utf-8')
// console.log('====sync read====')
// console.log(syncData)

// 回调形式 异步读取
// fs.readFile(testDir, 'utf-8', (err, callbackData) => {
//   if (!err) {
//     console.log('====callback read====')
//     console.log(callbackData)
//   }
// })

// promise形式 异步读取
// fs.promises.readFile(testDir, 'utf-8').then(promiseData => {
//   console.log('====promise read====');
//   console.log(promiseData);
// });

// promise 形式还可以是如下写法（常用）
fsPromises.readFile(testDir, 'utf-8').then(promiseData => {
  console.log('====promise read====');
  console.log(promiseData);
});
