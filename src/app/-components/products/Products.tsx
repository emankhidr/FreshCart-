import { getProducts } from '@/src/apis/products.api'
import React from 'react'
import ProductItem from '../ptoductItem/ProductItem'

export default async function Products() {

    const data = await getProducts()

  return (
    <>
        <h2 className='my-5'>Featured <span className='text-green-500 underline'>Products</span></h2>
         <div className='grid xl:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-5 py-10'>
      {data?.map(prod=><ProductItem prod={prod} key={prod._id}/>)}
    </div>

    </>
   
  )
}
