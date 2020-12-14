/*
 * @Author: your name
 * @Date: 2020-12-11 13:59:31
 * @LastEditTime: 2020-12-11 20:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/helpers/data.ts
 */

 import { isPlainObject } from './utils'

//  这里为什么要使用 isPlainObject 函数判断，而不用之前的 isObject 函数呢
// 因为 isObject 的判断方式，对于 FormData、ArrayBuffer 这些类型，isObject 判断也为 true
// 但是这些类型的数据我们是不需要做处理的，而 isPlainObject 的判断方式，只有我们定义的普通 JSON 对象才能满足。
 export function transformRequest (data: any): any {
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    } 
    return data
 }

 export function transformResponse(data: any): any {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (e) {
        // do nothing
      }
    }
    return data
  }