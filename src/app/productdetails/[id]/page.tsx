import { Button } from '@/components/ui/button'
import { getSingleProduct } from '@/src/apis/singleproduct.api'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MySlider from '../../-components/slider/Slider'
import ButtonCom from '../../-components/ButtonCom'

export default  async function page({params}:{ params : Promise<{id:string}>}) {
    const id = (await(params)).id
    console.log(id)
    const data = await getSingleProduct(id)
    console.log(data)
  return (
    <div className='flex items-center'>
     <div className='md:w-1/3 w-full p-4'>
     <Image src={data.imageCover} width={200} height={200} className='w-2/3' alt=''/>
     <div className='flex gap-3'>
        {/* {data.images.map(img=><Image src={img} alt="pic" key={img} width={50} height={50 }
        className='cursor-pointer'/>)} */}
        <MySlider pageList={data.images} slidesPerView={2}/>
     </div>
     </div>
     <div className='md:w-2/3 w-full p-4'>
           <h5 className='font-light text-gray-500 my-2'>{data.category?.name}</h5>
           <h5 className='font-light text-gray-500 my-2'>{data.category?._id}</h5>
            <h2 className='line-clamp-2'>{data.title}</h2>
            <p>{data.description}</p>

            {/* rating */}
            <p className='flex gap-2 items-center'>
                {data.ratingsAverage}
                <StarIcon className='text-yellow-400' />
            </p>

            {/* price */}
            <div className='flex justify-between items-center'>
                {data.priceAfterDiscount ? (
                    <div className='flex gap-3 my-2'>
                        <p className='text-green-500'>{data.priceAfterDiscount}EGP</p>
                        <p className='text-gray-500 text-sm line-through'>{data.price}EGP</p>
                    </div>
                ) : (
                    <p className='my-2'>{data.price}EGP</p>
                )}
            </div>
            <div className='flex w-full gap-5 my-5'>
                <ButtonCom id={id} cls='cursor-pointer text-white w-full block'>Add To Cart</ButtonCom>
                <Button className=' bg-black'>Buy it Now</Button>
            </div>
     </div>
    </div>
  )
}
