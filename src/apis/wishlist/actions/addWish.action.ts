'use server'

import { getTokenFn } from "@/src/utilites/getTokenFun";

export async function addWish(productId: string) {
  const token = await getTokenFn();

  if (!token) throw new Error("unauthorized");

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "POST",
    body: JSON.stringify({ productId }),
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error("failed");

  return data;
}