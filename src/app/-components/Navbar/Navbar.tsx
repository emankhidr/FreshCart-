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
import { FaShoppingCart, FaHeart, FaSearch, FaHeadset } from "react-icons/fa"
import { signOut, useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

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
    { path: "/categories", element: "categories" },
    { path: "/brands", element: "brands" },
  ]

  const auth = [
    { path: "/login", element: "login" },
    { path: "/register", element: "register" },
  ]

  function handleLogout() {
    signOut({ redirect: true, callbackUrl: "/login" })
  }

  return (
    <NavigationMenu className="max-w-full justify-between px-6 md:px-16 py-4 items-center">
      <div className="flex items-center gap-6 w-full">
        <Image src={logo} alt="fresh-cart-logo" className="ml-[-50px]" />

        <div className="flex items-center border rounded-full px-3 py-2 bg-gray-100 w-full max-w-md">
          <FaSearch className="text-gray-500 text-base mr-2" />
          <input
            type="text"
            placeholder="Search more products , brands ..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      <NavigationMenuList>
        <NavigationMenuItem className="flex md:hidden">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {status === "authenticated" ? (
          <>
            {links.map((link) => (
              <NavigationMenuItem key={link.element} className="hidden md:flex">
                <NavigationMenuLink asChild className="hover:bg-transparent">
                  <Link
                    href={link.path}
                    className={`capitalize text-base ${pathname === link.path
                        ? "text-green-500"
                        : "text-gray-600"
                      }`}
                  >
                    {link.element}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <Link href="/cart" className="mx-3">
              <div className="flex gap-2 items-center text-gray-600 text-base">
                <FaShoppingCart className="text-lg" />
                <span>{cartData?.numOfCartItems}</span>
              </div>
            </Link>

            <Link href="/wishlist" className="mx-3 text-gray-600 text-lg">
              <FaHeart />
            </Link>

            <div className="flex items-center gap-2 mx-3">
              <div className="bg-gray-100 rounded-full size-8 flex items-center justify-center">
                <FaHeadset className="text-green-500 text-lg" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm text-gray-600 pt-2">Support</span>
                <span className="text-xs text-gray-400">24/7 help</span>
              </div>
            </div>

            <p
              className="mx-2 text-gray-500 text-sm cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </p>
          </>
        ) : (
          <>
            {auth.map((link) => (
              <NavigationMenuItem key={link.element} className="hidden md:flex">
                <NavigationMenuLink asChild className="hover:bg-transparent">
                  <Link
                    href={link.path}
                    className="capitalize text-gray-600 text-base"
                  >
                    {link.element}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">
              {children}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}