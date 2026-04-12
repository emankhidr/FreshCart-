'use server'
import { getTokenFn } from '@/src/utilites/getTokenFun';
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function addToCart(productId:string){
    const token = await getTokenFn()

    if(!token){
        throw new Error ('unauthrized')
    }
    try {
        if(token){
                const data = await fetch(`${process.env.API}cart`,{
        method:'post',
        body:JSON.stringify({productId}),
        headers:{
            token,
            'Content-type': 'application/json'
        }

    })
    const payload = await data.json()
     console.log(payload)
    return payload
        }
    
   
    } catch (error) {
    throw new Error ('unauthrized')

    }

}