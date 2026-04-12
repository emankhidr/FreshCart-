import { error } from "console"

export interface categoryInterface{
    name : String
    image : string
    _id : string

}
export async function getCategories() : Promise<categoryInterface[]>{
  try{
      const data =  await fetch (`https://ecommerce.routemisr.com/api/v1/categories`)
      if (!data.ok)
        throw new Error ('some error')
    const payload = await data.json()
    return payload?.data;
  }
  catch(error){
     throw new Error ('some error')

  }
}