import CheckOut from '../CheckOut'

export  default async function page({params}:{params:Promise<{cartId:string}>}) {
  const cartId = (await params).cartId

  return (
    
      <CheckOut cartId={cartId}></CheckOut>
    
  )
}
