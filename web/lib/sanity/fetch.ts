import { client } from './client'

interface SanityFetchOptions {
  params?: Record<string, unknown>
  revalidate?: number | false
  tags?: string[]
}

export async function sanityFetch<T>(
  query: string,
  { params = {}, revalidate = 60, tags }: SanityFetchOptions = {}
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate, tags },
  })
}
