import { AxiosRequestConfig, AxiosPromise } from './types'
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/header'
import xhr from './xhr';
function axios(config: AxiosRequestConfig): AxiosPromise {
    processConfig(config)
    return xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
    config.url = transfromUrl(config)
    // header会依赖data是否为对象的判断，所以得放transformRequestData前面
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config)
}

function transfromUrl(config: AxiosRequestConfig): string {
    const {url, params} = config
    return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): string {
    const {data} = config
    return transformRequest(data)
}

function transformHeaders(config: AxiosRequestConfig): string {
    const {data, headers = {} } = config
    return processHeaders(headers, data)
}

export default axios