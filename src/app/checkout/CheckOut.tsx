'use client'
import { Button } from '@/components/ui/button'
import { onlinePayment } from '@/src/apis/payment/checkOut.api'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function CheckOut({cartId}:{cartId:string}) {
  interface formData{
    city:string,
    details:string,
    phone:number
  }

  const {register,handleSubmit} = useForm<formData>()
  async function handleCheckOut(data:formData){
    const res= await onlinePayment(cartId,data)
    console.log(res)
  if (res === 'success') {
  window.location.href = res.session.url
}
  return (
    <div>
      <form className='w-1/2 mx-auto my-5' onSubmit={handleSubmit(handleCheckOut)}>
      <input {...register('details')}  className='w-full my-2 border border-gray p-3 rounded-4xl ' placeholder='details' />
      <input  {...register('phone')}   className='w-full my-2 border border-gray p-3 rounded-4xl ' placeholder='phone' type='tel' />
      <input {...register('city')}   className='w-full my-2 border border-gray p-3 rounded-4xl ' placeholder='city' />
      <Button className='bg-green-500'>Send</Button>
      </form>
    </div>
  )
}
