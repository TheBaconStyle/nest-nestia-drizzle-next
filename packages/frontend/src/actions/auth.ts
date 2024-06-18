'use server'

import { signIn, signOut } from '@/config'
import { TSignInData } from '@/schema/signIn.schema'
import { AuthError } from 'next-auth'
import { TServerActionReturn } from './types'
import { getSearchParams } from './url'

export async function signInAction(
  data: TSignInData,
): Promise<TServerActionReturn<string, string>> {
  try {
    const searchParams = await getSearchParams()

    const callbackUrl = searchParams.get('callbackUrl') ?? '/'

    const url = await signIn('credentials', {
      ...data,
      redirect: false,
      redirectTo: callbackUrl,
    })

    return {
      status: 'success',
      data: url,
    }
  } catch (e) {
    if (e instanceof AuthError) {
      return {
        status: 'error',
        data: 'Неверный идентификатор/пароль',
      }
    }

    return {
      status: 'error',
      data: 'Что-то пошло не так',
    }
  }
}

export async function signOutAction() {
  return await signOut()
}
