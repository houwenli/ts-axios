/*
 * @Author: your name
 * @Date: 2020-12-10 15:54:16
 * @LastEditTime: 2020-12-10 15:54:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/examples/simple/app.ts
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
