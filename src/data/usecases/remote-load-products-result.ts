import { RemoteProductsModelReturn } from '../models'
import { HttpClient, HttpStatusCode } from '../protocols'

export class RemoteLoadProductsResult {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadProductsResult.Model>,
  ) {}

  async load() {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    const remoteSurveyResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return {
          ...remoteSurveyResult,
        }
      case HttpStatusCode.forbidden:
        throw new Error('ACESSO NEGADO')
      default:
        throw new Error('ERRO NÃO ESPERADO')
    }
  }
}

export namespace RemoteLoadProductsResult {
  export type Model = RemoteProductsModelReturn
}
