export async function getSpecificCategory(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  const data = await res.json();

  return data?.data;
}