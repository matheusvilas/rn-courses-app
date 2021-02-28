export type RemoteProductsModel = {
  id: string
  name: string
  description: string
  durations: string
  imageUrl: string
  price: number
}

export interface RemoteProductsModelReturn {
  data: RemoteProductsModel[]
}
