import { getSubCategories } from "@/src/apis/subcategories.api";
import Link from "next/link";

export default async function SubCategoriesPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getSubCategories(params.id);

  return (
    <div>
      <h2 className="my-5 font-bold">Sub Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {data.map((sub: any) => (
          <Link
            key={sub._id}
            href={`/subproducts/${sub._id}`}
            className="border p-4 rounded text-center hover:shadow"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  );
}