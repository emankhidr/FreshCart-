import { getCategories, CategoryInterface } from "@/src/apis/categories.api";
import Link from 'next/link'
import React from 'react'

export default async function Categories() {
  const data = await getCategories();

  if (!data) {
    return <p className="text-red-500">Failed to load categories</p>;
  }

  return (
    <>
      <h2 className="my-5">
        Shop by <span className="text-green-500 underline">Categories</span>
      </h2>

      <div className="grid gap-5 my-5 lg:grid-cols-6 md:grid-cols-5 grid-cols-2">
        {data.map((cat) => (
          <CatItem key={cat._id} cat={cat} />
        ))}
      </div>
    </>
  );
}
function CatItem({cat}:{cat:CategoryInterface }){
    return (
        <Link href={`/categories/${cat._id}`}>
            <div className='border border-border-color rounded-[8px] shadow-md p-3 text-center cursor-pointer hover:shadow-lg'>
                <img src={cat.image} className='rounded-full mx-auto my-4 size-20' alt="" />
                <p>{cat.name}</p>
            </div>
        </Link>
    )
}