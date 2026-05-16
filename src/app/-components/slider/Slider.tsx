'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'

type SlideContent = {
  title: string
  description: string
  btn1: string
  btn2: string
}

export default function MySlider({
  slidesPerView,
  pageList,
  showContent = true,
  slideContent
}: {
  slidesPerView: number
  pageList: string[]
  showContent?: boolean
  slideContent?: SlideContent[]
}) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span class='${className} bg-white! w-5! h-2.5! rounded-3xl!'></span>`
          },
          bulletActiveClass:
            'bg-white! opacity-100! w-10! rounded-3xl!'
        }}
        spaceBetween={5}
        loop
        slidesPerView={slidesPerView}
        className="relative"
      >
        {pageList.map((img, index) => (
          <SwiperSlide key={img}>
            <div className="relative w-full h-[500px]">

              <Image
                src={img}
                fill
                className="object-cover"
                alt="slider"
              />

              {showContent && (
                <>
                  <div className="absolute inset-0 bg-green-500/50"></div>

                  <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-md animate-slideUp">

                    <h2 className="text-3xl font-bold mb-3 pl-5">
                      {slideContent?.[index]?.title}
                    </h2>

                    <p className="text-gray-300 mb-4 pl-5">
                      {slideContent?.[index]?.description}
                    </p>

                    <div className="flex gap-3">

                      <Link href="/products">
                        <button className="bg-white text-green-600 px-5 py-2 rounded-xl font-medium">
                          {slideContent?.[index]?.btn1}
                        </button>
                      </Link>

                      <Link href="/products">
                        <button className="text-white border border-border-color px-5 py-2 rounded-xl font-medium">
                          {slideContent?.[index]?.btn2}
                        </button>
                      </Link>

                    </div>

                  </div>
                </>
              )}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          color: #22c55e;
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 10px;
          font-weight: bold;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(-50%) translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(-50%) translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp .8s ease-out;
        }
      `}</style>
    </div>
  )
}