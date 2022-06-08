import Head from 'next/head'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineAndroid} from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay,FreeMode,EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";


export default function Home(){

    return (
        <>
        <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</title>
            </Head>
        <DefaultLayout>
        <div className="mx-auto container rounded-3xl h-[88vh] shadow-2xl shadow-[#243b55a4] bg-gradient-to-r from-[#141E30] to-[#243B55]">
            <div className="flex flex-row gap-2 h-full w-full">
                <div className="w-1/2 h-full">

                </div>
                <div className="w-1/2 h-full flex items-center gap-2 justify-center">
                    <div className="w-1/3 h-full">
                        <div>Services</div>
                    <Swiper
                    direction={"vertical"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    effect={"coverflow"}
                    loop={true}
                    speed={500}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={34}
                    freeMode={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                      }}
                    className="h-[95%] w-full mySwiper"
                    modules={[Autoplay,FreeMode,EffectCoverflow]}
                    >
                        <SwiperSlide className='h-fit border'>Slide 1</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 2</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 3</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 4</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 5</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 6</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 7</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 8</SwiperSlide>
                        <SwiperSlide className='h-fit border'>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="w-1/3 h-full bg-blue-50">
                    <Swiper
                    direction={"vertical"}
                    className="h-full w-full"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="w-1/3 h-full bg-gray-50">
                    <Swiper
                    direction={"vertical"}
                    className="h-full w-full"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </DefaultLayout>
        </>
    )
}
