import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${params.id}`,
    {
      method: "DELETE",
      headers: {
        token: token.token,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}