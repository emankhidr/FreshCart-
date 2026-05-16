"use client";

export default function PromoCards() {
  return (
    <div className="mx-auto max-w-[1250px] px-4 my-14 w-full flex flex-row items-stretch justify-between gap-6">
      
      <div className="w-[calc(50%-12px)] bg-green-700 rounded-2xl p-6 md:p-10 text-white flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="bg-white/20 px-4 py-1.5 rounded-full inline-block text-xs font-semibold mb-5">
            Deal of the Day
          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-3 tracking-tight">
            Fresh Organic Fruits
          </h2>
          <p className="text-white/90 text-xs md:text-base font-normal mb-6">
            Get up to 40% off on selected organic fruits
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
            <span className="text-xl md:text-4xl font-extrabold tracking-tight">40% OFF</span>
            <span className="text-[10px] md:text-sm text-white/90 font-medium">
              Use code: ORGANIC40
            </span>
          </div>
          <button className="w-max bg-white text-green-700 font-bold px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-base transition-colors duration-200 hover:bg-neutral-100 flex items-center gap-2">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-[calc(50%-12px)] bg-orange-700 rounded-2xl p-6 md:p-10 text-white flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="bg-white/20 px-4 py-1.5 rounded-full inline-block text-xs font-semibold mb-5">
            New Arrivals
          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-3 tracking-tight">
            Exotic Vegetables
          </h2>
          <p className="text-white/90 text-xs md:text-base font-normal mb-6">
            Discover our latest collection of premium vegetables
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
            <span className="text-xl md:text-4xl font-extrabold tracking-tight">25% OFF</span>
            <span className="text-[10px] md:text-sm text-white/90 font-medium">
              Use code: FRESH25
            </span>
          </div>
          <button className="w-max bg-white text-orange-700 font-bold px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-base transition-colors duration-200 hover:bg-neutral-100 flex items-center gap-2">
            Explore Now
          </button>
        </div>
      </div>

    </div>
  );
}