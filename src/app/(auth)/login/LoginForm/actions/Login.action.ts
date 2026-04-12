'use server';
import { cookies } from "next/headers";
import { loginSchemaType } from "../Schema/LoginSchema";


export async function loginFn(formData: loginSchemaType) {
    const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json'
            }
        }
    );

    if (!data.ok) throw new Error(data?.statusText);

    const payload = await data.json()
    //cookies
    const cookie =  await cookies()
    cookie.set('token',payload?.token,{
        httpOnly:true,
        expires : 60*60*24*7
    })
    console.log(payload)
    return data.ok;

}