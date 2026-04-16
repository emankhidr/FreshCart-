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
    `${process.env.API}wishlist/${params.id}`,
    {
      method: "DELETE",
      headers: {
        token: token.token as string,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: res.statusText },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}