/*
 * @Author: your name
 * @Date: 2020-12-14 15:02:01
 * @LastEditTime: 2020-12-14 15:29:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/src/helpers/error.ts
 */
import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor (
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse
    ) {
        super(message)

        this.config = config
        this.code = code
        this.request = request
        this.response = response
        this.isAxiosError = true

        Object.setPrototypeOf(this, AxiosError.prototype)
    }
}

export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
): AxiosError {
    const error = new AxiosError(message, config, code, request, response)
  
    return error
}
