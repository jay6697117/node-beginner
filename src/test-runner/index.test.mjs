// 1.1 Assert

// const assert = require('assert')

// assert.ok(1 === 1, '1等于1') // 不会抛出错误
// // assert.ok(1 === 2, '1不等于2') // 会抛出 AssertionError 错误，错误信息为 '1不等于2'

// assert.equal(1, 1, '1等于1') // 不会抛出错误
// // assert.equal(1, 2, '1不等于2') // 会抛出 AssertionError 错误，错误信息为 '1不等于2'

// assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }, '两个对象相等') // 不会抛出错误
// assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }, '两个对象不相等') // 会抛出 AssertionError 错误，错误信息为 '两个对象不相等'


// import test from 'node:test'
// import assert from 'assert'

// test('1等于1', () => {
//   // This test passes because it does not throw an exception.
//   assert.strictEqual(1, 1)
// })

// test('两个对象相等', () => {
//   assert.deepStrictEqual({ a: 1, b: 2 }, { a: 1, b: 2 })
// })

// test('1不等于2', () => {
//   assert.ok(1 === 2)
// })
