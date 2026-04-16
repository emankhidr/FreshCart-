export interface SubCategory {
  _id: string;
  name: string;
}

export async function getSubCategories(categoryId: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data || [];
}