import AxiosHttpClient from '../../infra/http/axios-http-client'

const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()

export default makeAxiosHttpClient
