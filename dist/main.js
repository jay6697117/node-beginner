var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// modules/test/index.js
var test_exports = {};
__export(test_exports, {
  byebye: () => byebye,
  hello: () => hello,
  libData: () => lib_default,
  utilData: () => byebye
});

// modules/test/lib.js
function hello(name) {
  console.log(`Hello, ${name}!`);
}
var lib_default = {
  filename: "lib.js",
  des: "lib.js\u7684\u4E00\u4E9B\u9ED8\u8BA4\u5BFC\u51FA"
};

// modules/test/util.js
function byebye(name) {
  console.log(`ByeBye, ${name}!`);
}

// main.js
console.log("aaa :>> ", test_exports);
console.log("aaa.libData:", lib_default);
byebye("tom");
