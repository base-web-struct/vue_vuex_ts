import Axios from 'axios'
import { Message } from 'element-ui'

interface HttpBase {
  http: any,
  get (str: string, data: object, resolve: any): void,
  delete (str: string, data: object, resolve: any): void,
  put (str: string, data: object, resolve: any): void,
  post (str: string, data: object, resolve: any): void
}

export default class BaseService implements HttpBase {
  public http: any = null
  constructor () {
    this.http = Axios

    this.http.timeout = 45000

    this.http.interceptors.request.use((config: any) => {
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })

    this.http.interceptors.response.use((response: any) => {
      return response
    }, (error: any) => {
      return Promise.reject(error)
    })
  }

  public get (str: string, data: object, resolve: any): void {
    this.http.get(str, {
      params: data || {}
    }).then((res: any) => {
      if (res.status === 200 && res.data.status === 0) {
        resolve(res.data)
      } else {
        resolve(res.data || {
          status: 1,
          msg: '请求失败'
        })
      }
    })
  }

  public delete (str: string, data: object, resolve: any): void {
    this.http.delete(str, {
      params: data || {}
    }).then((res: any) => {
      if (res.status === 200 && res.data.status === 0) {
        resolve(res.data)
      } else {
        resolve(res.data || {
          status: 1,
          msg: '请求失败'
        })
      }
    })
  }

  public put (str: string, data: object, resolve: any): void {
    this.http.put(str, data).then((res: any) => {
      if (res.status === 200 && res.data.status === 0) {
        resolve(res.data)
      } else {
        resolve(res.data || {
          status: 1,
          msg: '请求失败'
        })
      }
    })
  }

  public post (str: string, data: object, resolve: any): void {
    this.http.post(str, data).then((res: any) => {
      if (res.status === 200 && res.data.status === 0) {
        resolve(res.data)
      } else {
        resolve(res.data || {
          status: 1,
          msg: '请求失败'
        })
      }
    })
  }

}

const services: any = {}

const files = require.context('./', false, /\.ts$/)

files.keys().forEach((item: string) => {
  if (item.indexOf('index') === -1) {
    const tmpKey: string = item.replace(/\.\//g, '').replace(/\.ts/g, 'Service')
    services[tmpKey] = files(item).default
  }
})

export {
  services
}
