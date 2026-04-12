'use client'
import React from 'react'
import { FaTrash } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getCart } from '@/src/apis/cart/cart.api'
import { Button } from '@/components/ui/button'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteItemCart } from '@/src/apis/cart/actions/deleteCart.action';
import { CartRes, ProductType } from '@/src/apis/cart/interfaces/cart.interface';
import { Spinner } from '@/components/ui/spinner';
import Loading from '../Loading';
import { updateCart } from '@/src/apis/cart/actions/updateCart.action';
import { clearCart } from '@/src/apis/cart/actions/clear.action';
import Link from 'next/link';


export default function Cart() {
  const { data } = useQuery<CartRes>({
    queryKey: ['cart'],
    queryFn: async () => {
      const data = await fetch(`api/cart`);
      if (!data.ok) throw new Error('failed to featch cart')
      return data.json()
    }
  })

  // delete cart
  const queryClient = useQueryClient()
  const { mutate: delMutate, data: delData, isPending: delPending } = useMutation({
    mutationFn: deleteItemCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    }
  })
  if (delPending)
    return <Loading />

  // update cart
  const {
    mutate: updateMuate,
    data: updateData,
    isPending: updatePending } = useMutation({
      mutationFn: updateCart,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['cart'] })
      }
    })
  function handleMutate(productId: string, count: number) {
    updateMuate({ productId, count })
  }
  if (updatePending || delPending)
    return <Loading />

  // clear cart
  const {
    mutate: clearMuate,
    data: clearData,
    isPending: clearPending } = useMutation({
      mutationFn: clearCart,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['cart'] })
      }
    })
    function handleClear(){
      clearMuate()}

    if(!data?.numOfCartItems)
      return <h2 className='text-green-500'>Cart is empty!</h2>
  return (

    <>
      <h2 className='m-3'>Total Cart Price : <span className='font-bold text-green-500'>
        {data?.data?.totalCartPrice} EGP</span></h2>
      <h3 className='m-3'> numOfCartItems : <span className=' text-green-500'>{data?.numOfCartItems}</span></h3>
      <div className="overflow-hidden rounded-md border">


        <Table>
          <TableHeader>
            <TableHead>ProductName</TableHead>
            <TableHead>ProductImage</TableHead>
            <TableHead>ProductPrice</TableHead>
            <TableHead>ProductCount</TableHead>
            <TableHead>Actions</TableHead>

          </TableHeader>
          <TableBody>
            {data?.data?.products.map((prod: ProductType) => <>

              <TableRow>
                <TableCell>
                  {prod.product.title}
                </TableCell>


                <TableCell>
                  <img src={prod?.product?.imageCover} className='w-[100px]' alt="" />
                </TableCell>


                <TableCell>
                  {prod?.price} Egp
                </TableCell>


                <TableCell>
                  <div className='flex gap-2 items-center'>
                    <Button onClick={() => handleMutate(prod?.product?._id, prod?.count + 1)} className='bg-green-500'>+</Button>
                    <span>{prod?.count} </span>
                    <Button onClick={() => handleMutate(prod?.product?._id, prod?.count - 1)} className='bg-green-500'>-</Button>
                  </div>
                </TableCell>
                <TableCell>
                  {<FaTrash className=' text-red-500 size-4 items-center' onClick={() => delMutate(prod?.product?._id)} />}

                </TableCell>


              </TableRow>
            </>)}



          </TableBody>
        </Table>
      </div>
      <div className='my-5 flex justify-end'>
        <Button onClick={handleClear}>Clear Cart</Button>
        <Link href={`/checkout/${data?.cartId }`}>
                <Button>Check Out</Button>

        </Link>
      </div>
    </>
  )
}
