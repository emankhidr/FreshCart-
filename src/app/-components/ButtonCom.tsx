'use client'

import { Button } from '@/components/ui/button'
import { addToCart } from '@/src/apis/cart/actions/addCart.action'
import { QueryClient, useMutation } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { toast } from 'sonner'

interface pageProps{
    children : ReactNode,
    cls:string,
    id:string
}
export default function ButtonCom({children,cls,id}:pageProps) {
    const {data, mutate} = useMutation({
        mutationFn:addToCart,
        onSuccess:()=>{
              toast('product added successfully',{position:'top-right'})
              
        },
        onError:()=>{
                toast('unauthrized')
        }
    })

   async function handleAddToCart()
    {
        mutate(id)
       
    }
    return (
        <div>
        <Button className={cls} onClick={handleAddToCart}>{children}</Button>

        </div>
    )
}
