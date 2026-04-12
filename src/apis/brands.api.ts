export interface Brand {
  _id: string
  name: string
  image: string
}

export async function getBrands(): Promise<Brand[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands")

  if (!res.ok) throw new Error("Failed to fetch brands")

  const data = await res.json()
  return data.data
}