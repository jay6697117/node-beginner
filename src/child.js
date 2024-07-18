process.on('message', (msg) => {
  // 监听来自父进程的消息
  console.log(`child.js - Message from parent: ${msg}`)
  setTimeout(() => {
    process.send('Hello from child!') // 向父进程发送消息
  }, 5000)
})
