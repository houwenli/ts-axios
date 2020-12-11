/*
 * @Author: your name
 * @Date: 2020-12-10 16:51:07
 * @LastEditTime: 2020-12-11 14:05:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/helpers/url.ts
 */
import {isDate, isPlainObject} from './utils';

function encode(val: string): string {
    return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL (url: string, params?: any) {
    if (!params) {
        return url
    }
    const parts: string[] = [];
    Object.keys(params).forEach(key => {
        let val = params[key];
        if (val === null || typeof val === 'undefined') {
            return
        }
        let values: string[];
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        } else {
            values = [val]
        }
        values.forEach ((item: any) => {
            if (isDate(item)) {
                item = item.toISOString()
            } else if (isPlainObject(item)) {
                item = JSON.stringify(item)
            }
            parts.push(`${encode(key)}=${encode(item)}`)
        })
    })
    let serializedParams = parts.join('&');
    if(serializedParams) {
        const makeIndex = url.indexOf('#')
        if(makeIndex !== -1) {
            url = url.slice(0, makeIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    return url;
}
