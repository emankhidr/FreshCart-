import { error } from "console"
import { productInterface } from "../interfaces/product.interface";

export async function getSingleProduct(id:string) : Promise<productInterface>{
  try{
      const data =  await fetch (`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      if (!data.ok)
        throw new Error ('some error')
    const payload = await data.json()
    return payload?.data;
  }
  catch(error){
     throw new Error ('some error')

  }
}