import { fork } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const child = fork(path.resolve(__dirname,'./child.js')) // 使用 fork() 方法创建子进程

child.on('message', (msg) => {
  // 监听来自子进程的消息
  console.log(`fork.js - Message from child: ${msg}`)
})

child.send('Hello from parent!') // 向子进程发送消息
