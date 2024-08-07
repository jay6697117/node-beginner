// import {URL} from 'url'
// const testUrl = 'https://www.baidu.com?search=aaa'
// const url = new URL(testUrl)
// console.log('url :>> ', url);


import readline from 'readline'


const rl = readline.createInterface({
  input: process.stdin, // 从标准输入流中读取数据
  output: process.stdout // 输出数据到标准输出流中
})

rl.setPrompt('node> ') // 设置提示符
rl.prompt() // 显示提示符

rl.on('line', (line) => {
  // 监听行事件
  switch (
    line.trim() // 去除收尾空白字符，进行简单的命令选择判断
  ) {
    case 'hello':
      console.log('world') // 输出 'world'
      break
    case 'exit':
      rl.close() // 关闭 readline 接口
      break
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`) // 输出收到的指令
      break
  }
  rl.prompt() // 显示提示符
})

rl.on('close', () => {
  // 监听关闭事件
  console.log('Goodbye!') // 输出 'Goodbye!'
  process.exit(0) // 退出 Node.js 进程
})
