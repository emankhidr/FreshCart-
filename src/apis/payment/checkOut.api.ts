'use server'
import { getTokenFn } from "@/src/utilites/getTokenFun"

interface shippingAddressInterface {
    "details": string,
    "phone": number,
    "city": string
}

export async function onlinePayment(
    cartId: string,
     shippingAddress:shippingAddressInterface
    ) :Promise<string> 
{

        const token = await getTokenFn()
         if(!token){
        throw new Error ('unauthrized')
    }
    
    const data = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?
        url=${process.env.NEXTAUTH_URL}`, {
        method: 'post',
        body: JSON.stringify({shippingAddress}),
        headers: {
            token,
            'Content-type':'application/json'

        }
    })
      if(!data.ok)
        throw new Error ('unauthrized')
    const res = await data.json()
        return res
}