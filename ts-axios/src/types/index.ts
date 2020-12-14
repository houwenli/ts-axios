/*
 * @Author: your name
 * @Date: 2020-12-10 15:24:02
 * @LastEditTime: 2020-12-14 15:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/types/index.ts
 */
export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    params?: any,
    headers?: any,
    responseType?: XMLHttpRequestResponseType,
    timeout?: number
}

export type Method = 'get' | 'GET'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}

export interface AxiosError extends Error {
    config: AxiosRequestConfig
    code?: string
    request?: any
    response?: AxiosResponse
    isAxiosError: boolean
}
