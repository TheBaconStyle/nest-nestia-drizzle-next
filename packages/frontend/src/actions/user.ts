'use server'

import { ApiConfig } from '@/config'
import api from 'sdk'

export async function create(data: { email: string; password: string }) {
  const user = await api.functional.getHello(ApiConfig, 'qweqweqwe')

  return user
}
