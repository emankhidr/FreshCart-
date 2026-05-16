"use client";

export default function PromoCards() {
  return (
    <div className="mx-auto max-w-[1250px] px-4 my-14 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="relative overflow-hidden w-full bg-gradient-to-br from-[#0aad0a] to-[#047857] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between min-h-[340px] shadow-sm group hover:shadow-md transition-all duration-300">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/5 rounded-full translate-x-12 translate-y-12 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span>🔥</span> Deal of the Day
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Fresh Organic Fruits
          </h2>

          <p className="text-white/80 text-sm md:text-base font-medium mb-8 max-w-[85%]">
            Get up to 40% off on selected organic fruits
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl font-black tracking-tight">
              40% OFF
            </span>
            <span className="text-xs md:text-sm text-white/90 bg-black/15 px-2.5 py-1.5 rounded-md font-mono font-medium">
              Use code: ORGANIC40
            </span>
          </div>

          <button className="self-start sm:self-auto bg-white text-[#0aad0a] font-bold px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors duration-200 flex items-center gap-2 text-sm md:text-base shadow-sm group/btn">
            Shop Now
            <svg 
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full bg-gradient-to-br from-[#ff8a00] to-[#e52e71] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between min-h-[340px] shadow-sm group hover:shadow-md transition-all duration-300">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/5 rounded-full translate-x-12 translate-y-12 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="bg-white/10 border border-white/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span>✨</span> New Arrivals
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Exotic Vegetables
          </h2>

          <p className="text-white/80 text-sm md:text-base font-medium mb-8 max-w-[85%]">
            Discover our latest collection of premium vegetables
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl font-black tracking-tight">
              25% OFF
            </span>
            <span className="text-xs md:text-sm text-white/90 bg-black/15 px-2.5 py-1.5 rounded-md font-mono font-medium">
              Use code: FRESH25
            </span>
          </div>

          <button className="self-start sm:self-auto bg-white text-[#ff8a00] font-bold px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors duration-200 flex items-center gap-2 text-sm md:text-base shadow-sm group/btn">
            Explore Now
            <svg 
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}