import { FaTruck, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa"

export default function Features() {
  return (
    <div className="max-w-[1100px] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* card 1 */}
      <div className="p-10 rounded-xl bg-blue-50 border border-blue-100 flex gap-3 items-start">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaTruck className="text-cyan-600 text-lg mt-3" />
        </div>
        <div>
          <h3 className="text-black font-semibold mt-4">Free Shipping</h3>
          <p className="text-gray-500 text-sm mb-3">On orders over 500 EGP</p>
        </div>
      </div>

      {/* card 2 */}
      <div className="p-10 rounded-xl bg-green-50 border border-green-100 flex gap-3 items-start">
        <div className="bg-green-100 p-3 rounded-full">
          <FaShieldAlt className="text-green-500 text-lg mt-3" />
        </div>
        <div>
          <h3 className="text-black font-semibold mt-4">Secure Payment</h3>
          <p className="text-gray-500 text-sm mb-3">100% secure transactions</p>
        </div>
      </div>

      {/* card 3 */}
      <div className="p-10 rounded-xl bg-orange-50 border border-orange-100 flex gap-3 items-start">
        <div className="bg-orange-100 p-3 rounded-full">
          <FaUndo  className="text-orange-600 text-lg mt-3" />
        </div>
        <div>
          <h3 className="text-black font-semibold mt-4">Easy Returns</h3>
          <p className="text-gray-500 text-sm mb-3">14-day return policy</p>
        </div>
      </div>

      {/* card 4 */}
      <div className="p-10 rounded-xl bg-purple-50 border border-purple-100 flex gap-3 items-start">
        <div className="bg-purple-100 p-3 rounded-full">
          <FaHeadset className="text-purple-500 text-lg mt-3" />
        </div>
        <div>
          <h3 className="text-black font-semibold mt-4">24/7 Support</h3>
          <p className="text-gray-500 text-sm mb-3">Dedicated support team</p>
        </div>
      </div>

    </div>
    
  )
}