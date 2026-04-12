export default async function BrandPage({
  params,
}: {
  params: { brandId: string }
}) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${params.brandId}`
  )

  const data = await res.json()

  const products = data?.data || []

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <h2 className="mb-6">Brand Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((prod: any) => (
            <div
              key={prod._id}
              className="p-4 border rounded-lg shadow-md"
            >
              <img
                src={prod.imageCover}
                className="w-full h-40 object-cover rounded"
              />

              <p className="mt-2 line-clamp-2">{prod.title}</p>

              <p className="text-green-600 font-semibold">
                {prod.price} EGP
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}