"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function getFullUrl() {
  const reqHeaders = headers()
  return reqHeaders.get("x-pathname")
}

export async function getPathname() {
  const url = await getFullUrl()
  if (!url) return "/"
  return new URL(url).pathname
}

export async function getSearchParams() {
  const url = await getFullUrl()
  return new URL(url ?? "").searchParams
}

export async function setSearchParams(data: Record<string, string>) {
  const searchParams = await getSearchParams()
  const url = getFullUrl()
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      searchParams.set(key, data[key])
      return
    }
    searchParams.delete(key)
  })
  redirect(url + searchParams.toString())
}

export async function redirectAction(url: string) {
  return redirect(url)
}
