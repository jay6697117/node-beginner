import fs from 'fs';
import { default as fsPromises } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, default as path } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testDir = path.resolve(__dirname, './test.txt');


// 1.1 读取文件
// const txtContent = fs.readFileSync(testDir, 'utf-8')
// console.log(txtContent);


// 1.2 写入文件
// fs.writeFileSync(path.resolve(__dirname, './newTest.txt'), 'hello world -666')
// fsPromises.writeFile(path.resolve(__dirname, './newTest.txt'), 'hello world -666')

// 读取一个图片
// const imgBuf = fs.readFileSync(path.resolve(__dirname, './logo.png'));
// console.log('isBuffer', Buffer.isBuffer(imgBuf));
// console.log('bufferSize', imgBuf.length);

// // 写入到新文件
// fs.writeFileSync(path.resolve(__dirname, './logo666.png'), imgBuf, 'binary');


// 1.3 获取文件信息
// console.log('__dirname :>> ', __dirname);
// console.log(fs.statSync(path.resolve(__dirname, './logo666.png')))
// console.log(fs.statSync(__dirname))

/*
Stats {
  dev: 16777230,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 91408359,
  size: 69665,
  blocks: 144,
  atimeMs: 1707493402586.4727,
  mtimeMs: 1707493389004.341,
  ctimeMs: 1707493389004.341,
  birthtimeMs: 1707493389004.1255,
  atime: 2024-02-09T15:43:22.586Z,
  mtime: 2024-02-09T15:43:09.004Z,
  ctime: 2024-02-09T15:43:09.004Z,
  birthtime: 2024-02-09T15:43:09.004Z
}
*/

/*
const fileInfo = fs.statSync(path.resolve(__dirname, './logo666.png'))
// 判断是文件还是目录
console.log(fileInfo.isFile(), fileInfo.isDirectory())
const dirInfo = fs.statSync(path.resolve(__dirname,'./modules'))
// 判断是文件还是目录
console.log(dirInfo.isFile(), dirInfo.isDirectory())
*/
/*
try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  const fileInfo = fs.statSync(path.resolve(__dirname, './logo666.png'))
  console.log(fileInfo.isFile(), fileInfo.isDirectory())
} catch (e) {
  console.log('文件不存在')
}
try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync(path.resolve(__dirname,'./not_exist.txt'))
} catch (e) {
  console.log('文件不存在')
}

try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  const dirInfo = fs.statSync(path.resolve(__dirname,'./modules'))
  console.log(dirInfo.isFile(), dirInfo.isDirectory())
} catch (e) {
  console.log('目录不存在')
}
try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync(path.resolve(__dirname,'./not_exist_dir'))
} catch (e) {
  console.log('目录不存在')
}
*/

// 1.4 追加输出
// fs.appendFileSync(testDir, 'Hello World2!\n');
// const txtContent = fs.readFileSync(testDir, 'utf-8')
// console.log(txtContent);


// 1.5 移动/重命名文件
fs.renameSync(path.resolve(__dirname, './newTest.txt'),path.resolve(__dirname, './aaa/test66.txt'))
