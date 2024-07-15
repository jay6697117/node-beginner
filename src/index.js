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
const { exec, execSync } = ChildProcess;
// const pwd = execSync('pwd')
// console.log(pwd.toString());
// const ls = execSync('ls -lh')
// console.log(ls.toString())


const file = '../src/index.js'
const execProcess = exec(`git log -1 --pretty="%ci" ${file}`)
execProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
  console.log(new Date(data))
})
