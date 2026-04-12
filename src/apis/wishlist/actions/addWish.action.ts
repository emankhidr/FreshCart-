'use server'

import { getTokenFn } from '@/src/utilites/getTokenFun'

export async function addWish(productId: string) {
  const token = await getTokenFn()

  if (!token) throw new Error('unauthorized')

  const res = await fetch(`${process.env.API}wishlist`, {
    method: 'POST',
    headers: {
      token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  })

  return res.json()
}