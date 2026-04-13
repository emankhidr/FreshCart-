import Image from "next/image";
import Products from "./-components/products/Products";
import slider1 from '../assets/img1.png'
import slider2 from '../assets/img1.png'
import slider3 from '../assets/img1.png'
import MySlider from "./-components/slider/Slider";
import { lazy, Suspense } from 'react';
import Loading from "./Loading";
import LoadingIcon from "./-components/loading/LoadingIcon";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import Features from "./-components/Features/Features";
const Categories = lazy(() => import('./-components/Categories/Categories'));
export default async function Home() {

    const data = await getServerSession()
  return (
  <div>
    {/* slider */}
    <MySlider pageList={[slider1.src,slider2.src,slider3.src] } slidesPerView={1} showContent={true}/>
    {/* feature */}
    <Features/>
    {/* categories */}
    <Suspense fallback={<LoadingIcon/>}>
      <Categories/>
    </Suspense>
    {/* products */}
    <Products/>
    
  </div>
  );
}
