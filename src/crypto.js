import crypto from 'crypto'

// const testStr = 'hello world'
// const sha256 = crypto.createHash('sha256').update(testStr).digest('hex')
// console.log('sha256 :>> ', sha256);

// const md5 = crypto.createHash('md5').update(testStr).digest('hex')
// console.log('md5 :>> ', md5);

// const sha512 = crypto.createHash('sha512').update(testStr).digest('hex')
// console.log('sha512 :>> ', sha512);
/*
import crypto from 'crypto';

// 定义加密算法和密钥，生成随机密码和向量
const algorithm = 'aes-256-cbc';
const password = crypto.randomBytes(32); // 生成随机 32 字节的密码
const iv = crypto.randomBytes(16); // 生成随机 16 字节的向量
console.log('algorithm :>> ', algorithm);
console.log('password :>> ', password.toString('hex'), ' - ', password.toString('base64'));
console.log('iv :>> ', iv.toString('hex'), ' - ', iv.toString('base64'));

// 待加密的数据
const data = 'Hello, World!';
console.log('Original data:', data);

// 创建加密算法实例
const cipher = crypto.createCipheriv(algorithm, password, iv);

// 使用 update 方法对数据进行加密
let encrypted = cipher.update(data, 'utf8', 'hex');
// 加密后的数据以十六进制形式(即字符串)返回
encrypted += cipher.final('hex');

console.log('Encrypted data:', encrypted);

// 创建解密算法实例
const decipher = crypto.createDecipheriv(algorithm, password, iv);

// 使用 update 方法对数据进行解密
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// 返回解密后的字符串 utf8编码
decrypted += decipher.final('utf8');

console.log('Decrypted data:', decrypted);
 */


// 4.3 随机数生成
const random1 = crypto.randomBytes(8).toString('hex');
const random2 = crypto.randomBytes(16).toString('hex');
const random3 = crypto.randomBytes(32).toString('hex');
const random4 = crypto.randomBytes(64).toString('hex');
console.log('random1 :>> ', random1);
console.log('random2 :>> ', random2);
console.log('random3 :>> ', random3);
console.log('random4 :>> ', random4);
