'use server'

import { getTokenFn } from '@/src/utilites/getTokenFun'

export async function deleteWish(productId: string) {
  const token = await getTokenFn()

  if (!token) throw new Error('unauthorized')

  const res = await fetch(`${process.env.API}wishlist/${productId}`, {
    method: 'DELETE',
    headers: {
      token,
    },
  })

  return res.json()
}