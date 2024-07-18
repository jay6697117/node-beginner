import ChildProcess from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// 1 spawn 方法
/*
// console.log('ChildProcess :>> ', ChildProcess);
const { spawn, spawnSync } = ChildProcess;
// const pwd = spawnSync('pwd')
// console.log(pwd.stdout.toString());
// const ls = spawnSync('ls', ['-lh'])
// console.log(ls.stdout.toString())

spawnSync('pwd', {
  stdio: 'inherit'
})

spawn('ls', {
  stdio: 'inherit'
})

// const { spawn, spawnSync } = ChildProcess
// const file =path.resolve(__dirname,'./logo.png')
// const spawnProcess = spawn('git', ['log', '-1', '--pretty="%ci"', file])

// spawnProcess.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`)
//   console.log(new Date(data))
// })
 */

// 2 exec 方法
// const { exec, execSync } = ChildProcess;
// const pwd = execSync('pwd')
// console.log(pwd.toString());
// const ls = execSync('ls -lh')
// console.log(ls.toString())

// const file =path.resolve(__dirname,'./logo.png')
// const execProcess = exec(`git log -1 --pretty="%ci" ${file}`)
// execProcess.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`)
//   console.log(new Date(data))
// })


// 3 execFile 方法
// const { execFile, execFileSync } = ChildProcess;
// const file =path.resolve(__dirname,'./hello.js')

// try {
//   const execData = execFileSync('node', [file], { encoding: 'utf8' });
//   console.log(`标准输出1: ${execData}`);
// } catch (error) {
//   console.error(`执行出错: ${error}`);
// }

// execFile('node', [file], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`执行出错: ${error}`);
//     return;
//   }
//   console.log(`标准输出2: ${stdout}`);
//   if (stderr) {
//     console.error(`标准错误: ${stderr}`);
//   }
// });


// 4 fork 方法
