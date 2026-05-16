import Products from "./-components/products/Products";
import slider1 from '../assets/img1.png'
import slider2 from '../assets/img1.png'
import slider3 from '../assets/img1.png'
import MySlider from "./-components/slider/Slider";
import { lazy, Suspense } from 'react';
import LoadingIcon from "./-components/loading/LoadingIcon";
import { getServerSession } from "next-auth";
import Features from "./-components/Features/Features";
import PromoCards from "./-components/PromoCard/PromoCard";

const Categories = lazy(() => import('./-components/Categories/Categories'));

export default async function Home() {

  await getServerSession()

  const sliderData = [
    {
      title: 'Fresh Products Delivered to your Door',
      description: 'Get 20% off your first order',
      btn1: 'Shop Now',
      btn2: 'View Details'
    },
    {
      title: 'Premium Quality Guaranteed',
      description: 'Fresh from farm to your table',
      btn1: 'Shop Now',
      btn2: 'Learn More'
    },
    {
      title: 'Fast & Free Delivery',
      description: 'Same day delivery available',
      btn1: 'Order Now',
      btn2: 'Delivery Info'
    }
  ]

  return (
    <div>
      <MySlider
        pageList={[slider1.src, slider2.src, slider3.src]}
        slidesPerView={1}
        showContent={true}
        slideContent={sliderData}
      />

      <Features />

      <Suspense fallback={<LoadingIcon />}>
        <Categories />
      </Suspense>

      <PromoCards/>


      <Products />
    </div>
  );
}