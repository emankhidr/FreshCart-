'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FaHeart } from 'react-icons/fa'
import { addWish } from '@/src/apis/wishlist/actions/addWish.action'

export default function WishlistHeart({ prod }: any) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: addWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    },
  })

  return (
    <FaHeart
      onClick={() => mutate(prod._id)}
      className="text-gray-400 hover:text-red-500 cursor-pointer"
    />
  )
}