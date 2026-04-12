export async function getProductsBySubCategory(subId: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?subcategory=${subId}`
  )

  const data = await res.json()

  return data?.data || []
}