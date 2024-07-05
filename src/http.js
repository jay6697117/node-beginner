// import http from 'http'
import https from 'https';

/*
// 由于请求的目标资源是 https 协议，所以这里使用 https 模块
https.get(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
  (res) => {
    // 响应内容拼接
    let content = ''
    res.on('data', (chunk) => {
      content += chunk
    })

    // 读完对外暴露内容和状态码
    res.on('end', () => {
      console.log(content)
    })

    res.on('error', (err) => {
      console.log(err)
    })
  }
)
*/

// 支持传递额外的参数
/*
const req = https.get(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
req.on('response', (res) => {
  // 响应内容拼接
  let content = ''
  res.on('data', (chunk) => {
    content += chunk
  })

  res.on('end', () => {
    console.log(content)
  })

  res.on('error', (err) => {
    console.log(err)
  })
})
*/

// 1.2 http.request
/*
const url = new URL(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
console.log('url :>> ', url);
const req = https.request(
  {
    // 设置请求方法
    method: 'GET',
    // http 80 https 443
    port: 443,
    hostname: url.hostname,
    path: url.pathname + url.search
  },
  (res) => {
    let content = ''
    res.on('data', (chunk) => {
      content += chunk
    })
    res.on('end', () => {
      console.log('statusCode', res.statusCode)
      console.log(content)
    })
  }
)
// 发送请求
req.end()
*/

/*
const url = new URL(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
);

// POST
const req = https.request(
  {
    // 设置请求方法
    method: 'POST',
    // http 80 https 443
    port: 443,
    hostname: url.hostname,
    path: url.pathname + url.search,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  res => {
    let content = '';
    res.on('data', chunk => {
      content += chunk;
    });
    res.on('end', () => {
      console.log('statusCode', res.statusCode);
      console.log(content);
    });
  }
);
// req.write('请求实体')
req.write(JSON.stringify({ name: 'xm' }));
req.end();
*/

// 1.3 fetch 和 axios

// fetch('https://json-server-demo-rho.vercel.app/users')
//   .then(res => {
//     console.log('res', res);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

/*
fetch(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
  .then(res => {
    console.log('res:\n', res);
    return res.json();
  })
  .then(data => {
    console.log('data:\n', data);
  })
  .catch(err => {
    console.error(err);
  });
*/

/* import axios from 'axios';

axios
  .get(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
  )
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });
 */

import http from 'http';

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/');
});
 */

// 3 request 内容介绍
// 3.1 请求路径和方法
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log('method::\n', method, ' - ', 'url:', url);
  const query = Object.fromEntries(new URL(url, 'http://localhost').searchParams);
  console.log('query::\n', query);

  console.log('headers:\n', req.headers);
  let body = [];
  req
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('body 1:', body, typeof body);
      body && (body = JSON.parse(body));
      console.log('body 2:', body, typeof body);
      res.statusCode = 200;
      // res.statusCode = 404;
      // res.statusCode = 500;
      // 设置响应头以允许跨域请求
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Custom-Header');
      // res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Type', 'application/json');
      // res.end('<h1>Hello, World!</h1>');
      const tempObj = { a: 11, b: 22 };
      const result = { ...tempObj, ...body };
      console.log('result', result);
      // res.end(JSON.stringify(result));
      // res.end('<h1>Hello, World 666!</h1>');
      // res.write('<h1>');
      // res.write('Hello');
      // res.write(', World 666!');
      // res.write('</h1>');
      res.write(JSON.stringify(result));
      res.end();
    });

  // res.statusCode = 200;
  // // 设置响应头以允许跨域请求
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Content-Type', 'application/json');
  // // res.end('<h1>Hello, World!</h1>');
  // const tempObj = { a: 1, b: 2 };
  // const result = { ...tempObj, ...body };
  // console.log('result', result)
  // res.end(JSON.stringify(result));
});
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/');
});

// 3.2 query 参数解析

// 4 response 内容介绍
