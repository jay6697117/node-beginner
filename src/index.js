import ChildProcess from 'child_process'
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// console.log('ChildProcess :>> ', ChildProcess);
// const { spawn, spawnSync } = ChildProcess
// const pwd = spawnSync('pwd')
// console.log(pwd.stdout.toString());
// const ls = spawnSync('ls', ['-lh'])
// console.log(ls.stdout.toString())


const { spawn, spawnSync } = ChildProcess
console.log('__dirname :>> ', __dirname);
const file =path.resolve(__dirname,'./aaa/2.py')
console.log('file :>> ', file);
const spawnProcess = spawn('git', ['log', '-1', '--pretty="%ci"', file])
spawnProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
  console.log(new Date(data))
})
