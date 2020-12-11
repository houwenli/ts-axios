/*
 * @Author: your name
 * @Date: 2020-12-11 14:47:31
 * @LastEditTime: 2020-12-11 16:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/helpers/header.ts
 */

import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string):void {
    if(!headers) {
        return
    }
    Object.keys(headers).forEach(name => {
        if(name !== normalizeName && name.toUpperCase() !== normalizeName.toUpperCase()) {
            headers[normalizeName] = headers[name]
            delete headers[name]
        }
    })
}

export function processHeaders (headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}