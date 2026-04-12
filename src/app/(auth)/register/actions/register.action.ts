'use server'
import { registerSchemaType } from "../Schema/register.schema";

export async function registerFn(formData: registerSchemaType) {
    const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json'
            }
        }
    );
    if (!data.ok) throw new Error(data?.statusText);


    return data.ok;

}