import { getSubCategories } from "@/src/apis/subcategories.api"
import Link from "next/link"

export default async function SubCategoriesPage({
  params,
}: {
  params: { categoryId: string }
}) {
  const subcategories = await getSubCategories(params.categoryId)

  return (
    <div className="max-w-[1100px] mx-auto my-10">
      <h2 className="mb-5 text-lg font-semibold">Sub Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {subcategories.map((sub: any) => (
          <Link
            key={sub._id}
            href={`/categories/${params.categoryId}/${sub._id}`}
          >
            <div className="border p-4 text-center rounded-lg hover:shadow-md transition cursor-pointer">
              <p>{sub.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}