import {  } from "@/src/apis/categories.api";
import { getProducts } from "@/src/apis/categoryProducts.api";
import ProductItem from "@/src/app/-components/ptoductItem/ProductItem";

export default async function SubProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const products = await getProducts();

  const filtered = products.filter((p: any) =>
    p.subcategory?.some((s: any) => s._id === params.id)
  );

  return (
    <div>
      <h2 className="my-5 font-bold">
        Products ({filtered.length})
      </h2>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((prod: any) => (
            <ProductItem key={prod._id} prod={prod} />
          ))}
        </div>
      )}
    </div>
  );
}