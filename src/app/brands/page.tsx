import { getBrands } from "@/src/apis/brands.api"
import Link from "next/link"

export default async function BrandsPage() {
  const brands = await getBrands()

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <h2 className="mb-6 text-xl font-semibold">
        Shop by <span className="text-green-500 underline">Brands</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {brands.map((brand) => (
          <Link key={brand._id} href={`/brands/${brand._id}`}>
            <div className="relative group bg-white border shadow-md rounded-lg p-4 cursor-pointer overflow-hidden transition hover:shadow-lg">

              {/* Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 object-contain mx-auto"
              />

              {/* Name */}
              <p className="text-center mt-3 text-gray-700 group-hover:text-purple-600 transition">
                {brand.name}
              </p>

              {/* Hover layer */}
              <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <p className="text-purple-600 font-semibold text-lg">
                  {brand.name}
                </p>

                <div className="flex items-center gap-2 text-purple-500 mt-2">
                  <span>View Products</span>
                  <span>→</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}