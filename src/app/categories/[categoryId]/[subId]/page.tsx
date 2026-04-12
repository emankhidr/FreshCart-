import { getProductsBySubCategory } from "@/src/apis/categoryProducts.api"
import ProductItem from "@/src/app/-components/ptoductItem/ProductItem";

export default async function ProductsPage({
  params,
}: {
  params: { categoryId: string; subId: string }
}) {
const products = await getProductsBySubCategory(params.subId)
  return (
    <div className="max-w-[1100px] mx-auto my-10">
      <h2 className="text-lg font-semibold mb-5">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {products.length === 0 ? (
  <p className="text-gray-500">No products found</p>
) : (
  products.map((prod: any) => (
    <ProductItem key={prod._id} prod={prod} />
  ))
)}
      </div>
    </div>
  )
}