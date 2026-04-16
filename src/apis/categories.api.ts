export interface CategoryInterface {
  _id: string;
  name: string;
  image: string;
}

export async function getCategories(): Promise<CategoryInterface[] | null> {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch categories");

    const data = await res.json();

    return data?.data || [];
  } catch (error) {
    return null;
  }
}