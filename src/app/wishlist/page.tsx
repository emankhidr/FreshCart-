'use client'

import React from 'react'
import { FaTrash } from "react-icons/fa"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Loading from "../Loading"

export default function WishlistPage() {

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch("/api/wishlist")
      if (!res.ok) throw new Error("failed to fetch wishlist")
      return res.json()
    }
  })

  const queryClient = useQueryClient()

  const { mutate: delMutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/wishlist/${id}`, {
        method: "DELETE"
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] })
    }
  })

  if (isLoading || isPending) return <Loading />

  if (!data?.data?.length)
    return <h2 className="text-green-500 p-5">Wishlist is empty!</h2>

  return (
    <>
      <h2 className="m-3">
        Wishlist Items : <span className="text-green-500">
          {data?.data?.length}
        </span>
      </h2>

      <div className="overflow-hidden rounded-md border">

        <Table>

          <TableHeader>
            <TableRow>
              <TableHead>ProductName</TableHead>
              <TableHead>ProductImage</TableHead>
              <TableHead>ProductPrice</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {data?.data?.map((item: any) => (
              <TableRow key={item._id}>

                <TableCell>
                  {item.title}
                </TableCell>

                <TableCell>
                  <img
                    src={item.imageCover}
                    className="w-[100px]"
                    alt=""
                  />
                </TableCell>

                <TableCell>
                  {item.price} EGP
                </TableCell>

                <TableCell>
                  <FaTrash
                    className="text-red-500 cursor-pointer size-4"
                    onClick={() => delMutate(item._id)}
                  />
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>

      </div>
    </>
  )
}