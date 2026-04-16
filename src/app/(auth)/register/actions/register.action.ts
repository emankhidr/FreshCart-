'use server'

import { registerSchemaType } from "../Schema/register.schema";


export async function registerFn(formData: registerSchemaType) {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Register failed");
  }

  return true;
}