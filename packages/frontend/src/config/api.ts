import { IConnection } from '@nestia/fetcher'

export const ApiConfig: IConnection = {
  host: process.env.API_URL as string,
}

export function createApiConfig(
  data: IConnection & {
    options?: Parameters<typeof fetch>[1]
  },
): IConnection {
  return {
    ...data,
  }
}
