/*
 * @Author: your name
 * @Date: 2020-12-10 16:51:42
 * @LastEditTime: 2020-12-11 14:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/helpers/utils.js
 */

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]';
}

// export function isObject(val: any): val is Object {
//     return val != null && typeof val === 'object'
// }

export function isPlainObject (val: any): val is Object {
    return toString.call(val) === '[object Object]'
}