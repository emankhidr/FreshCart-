"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Wishlist() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch("/api/wishlist");
      return res.json();
    },
  });

  const { mutate: deleteItem } = useMutation({
   mutationFn: async (id: string) => {
  console.log("DELETE ID:", id);

  const res = await fetch(`/api/wishlist/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  console.log("DELETE RESPONSE:", data);

  return data;
},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (!data?.data?.length)
    return <h2 className="text-green-500 p-5">Wishlist is empty</h2>;

  return (
    <div className="p-5">

      <h2 className="text-xl font-bold mb-4">
        Wishlist ({data.data.length})
      </h2>

      <div className="border rounded-md overflow-hidden">

        <Table>

          {/* HEADER */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Product</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Image</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* BODY */}
          <TableBody>

            {data.data.map((item: any) => (
              <TableRow key={item._id}>

                {/* PRODUCT */}
                <TableCell className="text-center font-medium">
                  <Link
                    href={`/productsdetails/${item._id}`}
                    className="hover:text-green-600 line-clamp-1"
                  >
                    {item.title}
                  </Link>
                </TableCell>

                {/* PRICE */}
                <TableCell className="text-center font-semibold">
                  {item.price} EGP
                </TableCell>

                {/* IMAGE */}
                <TableCell className="text-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={item.imageCover}
                      className="w-10 h-10 object-cover rounded-md border"
                      alt={item.title}
                    />
                  </div>
                </TableCell>

                {/* ACTION */}
                <TableCell className="text-center">
                  <button
                    onClick={() => deleteItem(item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>

      </div>
    </div>
  );
}