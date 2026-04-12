import { productInterface } from '@/src/interfaces/product.interface'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonCom from '../ButtonCom'
import { FaArrowsRotate } from "react-icons/fa6"
import { IoEyeSharp } from "react-icons/io5"
import WishlistHeart from '../Wishlist/WishlistHeart'

export default function ProductItem({ prod }: { prod: productInterface }) {
  return (
    <div className="p-4 rounded-[8px] border border-border-color relative group transition-all duration-300 hover:-translate-y-2">

      {/* ICONS */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 text-gray-500">

        <WishlistHeart prod={prod} />

        <FaArrowsRotate className="hover:text-green-500 cursor-pointer text-[18px]" />
        <IoEyeSharp className="hover:text-green-500 cursor-pointer text-[18px]" />

      </div>

      {/* IMAGE */}
      <Link href={`/productdetails/${prod._id}`}>
        <Image
          width={100}
          height={100}
          src={prod.imageCover}
          className="mx-auto w-1/2 block"
          alt={prod.title}
        />
      </Link>

      {/* CATEGORY */}
      <h5 className="text-gray-500 font-light my-2">
        {prod.category?.name}
      </h5>

      {/* TITLE */}
      <p className="line-clamp-2 text-gray-700">
        {prod.title}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-2 my-2">
        <span className="text-sm text-gray-600">
          {prod.ratingsAverage}
        </span>

        <div className="flex gap-[2px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              size={14}
              className={
                i < Math.round(prod.ratingsAverage)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-700">
          {prod.price} EGP
        </p>

        <ButtonCom
          id={prod._id}
          cls="bg-green-500 text-white rounded-full"
        >
          +
        </ButtonCom>
      </div>

    </div>
  )
}