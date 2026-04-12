'use client'

import { FaTrash } from "react-icons/fa"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWish } from "@/src/apis/wishlist/actions/deleteWish.action"

export default function DeleteWishButton({ id }: { id: string }) {

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: deleteWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] })
    }
  })

  return (
    <FaTrash
      className="text-red-500 cursor-pointer ml-3"
      onClick={() => mutate(id)}
    />
  )
}