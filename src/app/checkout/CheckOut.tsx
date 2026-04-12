'use client'
import { Button } from '@/components/ui/button'
import { onlinePayment } from '@/src/apis/payment/checkOut.api'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function CheckOut({ cartId }: { cartId: string }) {

  const { register, handleSubmit } = useForm()

  async function handleCheckOut(data: any) {
    const res: any = await onlinePayment(cartId, data)

    if (res.status === 'success') {
      window.location.href = res.session.url
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleCheckOut)}>
        <input {...register('details')} placeholder="details" />
        <input {...register('phone')} placeholder="phone" />
        <input {...register('city')} placeholder="city" />
        <button>Send</button>
      </form>
    </div>
  )
}