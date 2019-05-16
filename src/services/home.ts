import Service from './'

interface HomeBase<T> {
  getList (data: object): Promise<T>
}

export class HomeService extends Service implements HomeBase<any> {
  constructor () {
    super()
  }

  public getList (data: object): Promise<any> {
    return new Promise((resolve: any) => {
      super.get('/api', data, resolve)
    })
  }
}


export default new HomeService()
