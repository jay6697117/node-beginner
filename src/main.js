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
// fs.renameSync(path.resolve(__dirname, './newTest.txt'),path.resolve(__dirname, './aaa/test66.txt'))

// 1.6 删除文件
// fs.unlinkSync(path.resolve(__dirname, './aaa/test66.txt'))
// fs.rmSync(path.resolve(__dirname, './aaa/test.txt'))
// 删除 test-dir 目录（包含其子文件）
// fs.rmSync(path.resolve(__dirname, './aaa'), { recursive: true })

// 2.1 读取目录所有文件
// const files = fs.readdirSync(path.resolve(__dirname, './aaa'), { withFileTypes: true });
// console.log(
//   files.map(file => {
//     console.log(file.isDirectory());
//     return { name: file.name, isDirectory: file.isDirectory() };
//   })
// );

// 2.2 创建目录
// fs.mkdirSync(path.resolve(__dirname, 'test-dir/a/b/c/d'), { recursive: true })

// 2.3 删除目录
// fs.rmdirSync(path.resolve(__dirname, 'test-dir'), { recursive: true })

// 2.4 监听目录变更
// 监听当前目录下所有的文件和子目录中的文件

// fs.watch(path.resolve(__dirname, './'), { recursive: true }, (eventType, filename) => {
//   console.log(`File '${filename}' has changed: ${eventType}`);
// });

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(file => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(path.resolve(dirPath, file.name), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.resolve(dirPath, file.name));
    }
  });

  return arrayOfFiles;
}

// 获取当前目录下所有文件
const currentDir = path.resolve(__dirname, './');
console.log(getAllFiles(currentDir));
