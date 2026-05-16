"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import logo from "../../../assets/logo.png"
import Image from "next/image"
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaTruck,
  FaGift,
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa"
import { CiUser } from "react-icons/ci"
import { signOut, useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"

export function NavigationMenuDemo() {
  const { data, status } = useSession()
  const pathname = usePathname()

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await fetch(`api/cart`)
      if (!data.ok) throw new Error("failed to featch cart")
      return data.json()
    },
  })

  const links = [
    { path: "/", element: "home" },
    { path: "/shop", element: "shop" },
    { path: "/brands", element: "brands" },
    
  ]

  function handleLogout() {
    signOut({ redirect: true, callbackUrl: "/login" })
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 border-b">
      <div className="px-6 md:px-10 py-5 mt-2 flex items-center justify-between border-b text-sm">
        <div className="flex items-center my-3 gap-6 text-gray-600">
          <div className="flex items-center gap-1">
            <FaTruck className="text-green-600" />
            <p>Free Shipping on Orders 600 EGP</p>
          </div>

          <div className="flex items-center gap-2">
            <FaGift className="text-green-600" />
            <p>New Arrivals Daily</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-600" />
            <p>+1 (800) 123-4567</p>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600" />
            <p>support@freshcart.com</p>
          </div>

          <span>|</span>

          {status === "authenticated" ? (
            <>
              <div className="flex items-center gap-2">
                <CiUser className="text-green-600 text-lg" />

                <p className="capitalize">
                  {data?.user?.name}
                </p>
              </div>

                <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-green-600 duration-300 cursor-pointer"
              >
                <FaSignOutAlt />

                <p>Sign out</p>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="flex items-center gap-2 hover:text-green-600 duration-300"
              >
                <CiUser className="text-gray-600 text-lg" />

                <p className="text-gray-600">
                  Sign Up
                </p>
              </Link>

              <Link
                href="/login"
                className="flex items-center gap-2 hover:text-green-600 duration-300"
              >
                <FaUserPlus className="text-gray-600 text-lg" />

                <p className="text-gray-600">
                  Sign In
                </p>
              </Link>
            </>
          )}
        </div>
      </div>

      <NavigationMenu className="max-w-full justify-between px-6 md:px-10 py-6 mt-3 mb-3 items-center">
        <div className="flex items-center gap-6 w-full">
          <Image src={logo} alt="fresh-cart-logo" />

          <div className="flex items-center border rounded-full px-4 py-4 bg-gray-50 w-[400px] max-w-[400px] ml-2">
            <input
              type="text"
              placeholder="Search products,brands and more..."
              className="bg-transparent outline-none w-full text-sm px-2"
            />

            <FaSearch className="text-green-600 text-base mr-2" />
          </div>
        </div>

        <NavigationMenuList className="flex items-center gap-1 ml-[-180px]">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="hover:bg-green-50">
              <Link
                href="/"
                className={`capitalize text-[19px] font-medium px-4 py-2 rounded-full duration-300 ${
                  pathname === "/"
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="hover:bg-green-50">
              <Link
                href="/shop"
                className={`capitalize text-[19px] font-medium px-4 py-2 rounded-full duration-300 ${
                  pathname === "/shop"
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                shop
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[19px] text-gray-700 font-medium bg-transparent hover:bg-green-50 hover:text-green-600">
              Categories
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="flex flex-col p-3 min-w-[220px]">
                <Link
                  href="/categories"
                  className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 duration-300"
                >
                  All Categories
                </Link>

                <Link
                  href="/categories/electronics"
                  className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 duration-300"
                >
                  Electronics
                </Link>

                <Link
                  href="/categories/women"
                  className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 duration-300"
                >
                  Women's Fashion
                </Link>

                <Link
                  href="/categories/men"
                  className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 duration-300"
                >
                  Men's Fashion
                </Link>

                <Link
                  href="/categories/beauty"
                  className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 duration-300"
                >
                  Beauty & Health
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="hover:bg-green-50">
              <Link
                href="/brands"
                className={`capitalize text-[19px] font-medium px-4 py-2 rounded-full duration-300 ${
                  pathname === "/brands"
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                brands
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <div className="flex items-center gap-2 mx-4">
            <div className="bg-gray-100 rounded-full size-10 flex items-center justify-center">
              <FaHeadset className="text-green-600 text-lg" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-sm text-gray-600 pt-1">
                Support
              </span>

              <span className="text-xs text-gray-400">
                24/7 help
              </span>
            </div>
          </div>

          <span className="text-gray-400 mx-1">|</span>

          <Link
            href="/wishlist"
            className="text-gray-500 hover:text-green-600 duration-300 text-xl p-2"
          >
            <FaHeart />
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-500 hover:text-green-600 duration-300 text-xl p-2"
          >
            <FaShoppingCart />

            {status === "authenticated" && (
              <span className="text-sm">
                {cartData?.numOfCartItems}
              </span>
            )}
          </Link>

          {status === "authenticated" ? (
            <Link
              href="/"
              className="size-10 rounded-full bg-green-50 hover:bg-green-100 duration-300 flex items-center justify-center text-green-600 text-xl ml-2"
            >
              <CiUser />
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 duration-300 text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm ml-2 min-w-[110px]"
            >
              <FaUserPlus />

              <p className="font-medium">
                Sign In
              </p>
            </Link>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="h-[140px]"></div>
    </div>
  )
}