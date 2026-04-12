import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react"

import {
  AiOutlineWallet,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment
} from "react-icons/ai"

import logo from "../../../assets/logo.png"
import { FaPhoneAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-[1250px] mx-auto px-5 py-10">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">

          {/* col 1 */}
          <div className="md:col-span-2 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <Image
                src={logo}
                alt="logo"
                className="w-[150px] bg-white p-4 rounded-2xl"
              />

              <p className="text-sm text-gray-500">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands
                at competitive prices with a seamless shopping experience.
              </p>

              <div className="space-y-3 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500 size-[16px] " />
                  <span>+1 (800) 123-4567</span>
                </div>

                <div className="flex items-center gap-2">
                  <AiOutlineMail className="text-green-500 size-[16px]"  />
                  <span>support@freshcart.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <AiOutlineEnvironment className="text-green-500 size-16px]" />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>

              </div>
            </div>

            {/* icons */}
            <div className="flex gap-3 mt-5">
              <Facebook className="cursor-pointer bg-gray-800 rounded-full  text-gray-400   hover:text-green-500" />
              <Twitter className="cursor-pointer bg-gray-800 rounded-full text-gray-400  hover:text-green-500" />
              <Instagram className="cursor-pointer bg-gray-800 rounded-full text-gray-400  hover:text-green-500" />
              <Youtube className="cursor-pointer bg-gray-800 rounded-full text-gray-400  hover:text-green-500" />
            </div>
          </div>

          {/* col 2 */}
          <div>
            <h3 className="font-semibold mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">All Products</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Categories</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Brands</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Electronics</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Men's Fashion</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* col 3 */}
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">My Account</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Order History</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-green-500 text-gray-500 text-[14px]">Shopping Cart</Link></li>
              <li><Link href="/login" className="hover:text-green-500 text-gray-500 text-[14px]">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-green-500 text-gray-500 text-[14px]">Create Account</Link></li>
            </ul>
          </div>

          {/* col 4 */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Help Center</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Track Order</Link></li>
            </ul>
          </div>

          {/* col 5 */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-green-500 text-gray-500 text-[14px]">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center text-sm text-gray-400">

          <p>© 2026 FreshCart. All rights reserved.</p>

          <div className="flex gap-5 items-center">

            <p className="flex items-center gap-1">
              <AiOutlineWallet />
              Visa
            </p>

            <p className="flex items-center gap-1">
              <AiOutlineWallet />
              Mastercard
            </p>

            <p className="flex items-center gap-1">
              <AiOutlineWallet />
              PayPal
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}