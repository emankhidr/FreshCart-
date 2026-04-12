import { getTokenFn } from '@/src/utilites/getTokenFun';
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import { CartRes } from './interfaces/cart.interface';

export async function getCart(): Promise<CartRes|null> {
    const token = await getTokenFn()

    if (!token) {
        throw new Error('unauthrized !')
    }
    try {
        if (token) {
            const data = await fetch(`${process.env.API}cart`, {

                headers: {
                    token,
                    'Content-type': 'application/json'
                }

            })
            const payload = await data.json()
            console.log('cart', payload)
            return payload

        }
        else {
            return null
        }

    } catch (error) {
        throw new Error('unauthrized')

    }

}