import Head from 'next/head'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import {CgBrowser} from 'react-icons/cg'
import {IoChevronDownCircle, IoChevronForwardCircle} from 'react-icons/io5'
import {AiOutlineApi} from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import { ImAndroid, ImCogs } from 'react-icons/im'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,FreeMode,EffectCards,Thumbs,Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { useState,useRef } from 'react'


export default function Home(){
    const [thumbsSwiper, setThumbsSwiper] = useState(0);

    return (
        <>
        <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</title>
            </Head>
        <DefaultLayout>
        <div className="mx-auto container rounded-3xl h-[88vh] shadow-2xl shadow-[#243b55a4] bg-gradient-to-r from-[#141E30] to-[#243B55]">
            <div className="flex flex-row gap-2 h-full w-full">
                <div className="w-1/2 h-full p-40">
                    <span>
                        We represent 
                    </span>
                    <br/>
                    <span>
                        Security
                    </span>
                    <div className="flex flex-row gap-2 items-center justify-around w-full">
                            <button className='w-52 h-20 group bg-gradient-to-r flex-col from-[#f12711] duration-200 cursor-pointer to-[#f3be4c] hover:from-[#fdecea] hover:to-[#fceed0] rounded-2xl shadow-xl flex justify-center px-8'>
                                    <h1 className="text-left mb-0 font-extrabold text-white group-hover:text-transparent text-3xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#f5af19] to-[#f12711] drop-shadow-lg group-hover:drop-shadow-[0_10px_10px_rgba(241,39,17,0.7)] duration-200">
                                        Services
                                    </h1>
                                    <span className='text-left font-semibold text-sm text-white group-hover:text-gray-400'>
                                        We Provide
                                    </span>
                            </button>
                    </div>
                </div>
                <div  className="w-1/2 h-full p-40">
                    <div className="flex flex-row relative">
                        <div className="bg-[#141E30] w-16 z-10 h-28 mt-6 rounded-lg p-1">block 1</div>
                        <div className="w-52 h-[1px] top-20 z-0 absolute bg-white"></div>
                        <div className="bg-[#141E30] z-10 w-48 h-32 mt-2 rounded-lg p-2 ml-20">block 2</div>
                        <div className="w-28 h-[1px] top-20 z-0 absolute bg-white right-0"></div>
                        <div className="bg-[#141E30] z-10 w-24 h-32  rounded-lg p-2 absolute -right-10 mt-2">block 3</div>
                    </div>
                    <div className="flex flex-row relative">
                        <div className="w-2 h-28 border-r ml-5"></div>
                        <div className="w-2 h-28 border-r ml-48"></div>
                        <div className="w-2 h-28 border-r ml-auto"></div>
                    </div>
                    <div className="bg-[#141E30] w-full h-20 ml-[0.8rem] rounded-xl p-2">
                        APIs
                    </div>
                </div>
            </div>
        </div>
        </DefaultLayout>
        </>
    )
}
