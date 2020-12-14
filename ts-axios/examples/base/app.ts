/*
 * @Author: your name
 * @Date: 2020-12-10 21:19:22
 * @LastEditTime: 2020-12-12 15:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/examples/base/app.ts
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})

axios({
    method: 'post',
    url: '/base/post',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    data: {
      a: 1,
      b: 2
    }
  })
  
const arr = new Int32Array([21, 31])

axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
})

axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 2
    }
  })
  
  axios({
    method: 'post',
    url: '/base/post',
    headers: {
      'content-type': 'application/json;'
    },
    data: {
      a: 1,
      b: 2
    }
  })
  
  const paramsString = 'q=URLUtils.searchParams&topic=api'
  const searchParams = new URLSearchParams(paramsString)
  
  axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
  })

  // tslint:disable-next-line: no-floating-promises
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 1,
      b: 2
    }
  }).then((res) => {
    console.log(res)
  })
  
  // tslint:disable-next-line: no-floating-promises
  axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
      a: 3,
      b: 4
    }
  }).then((res) => {
    console.log(res)
  })

  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })