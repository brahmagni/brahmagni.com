import Head from 'next/head'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { useState } from 'react'
import { AiFillApi, AiOutlineAndroid, AiOutlineDatabase } from 'react-icons/ai'
import { BiCodeCurly } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
export default function Home(){
    const [currentShowcase, setCurrentShowcase] = useState(null)

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
                <div  className="w-1/2 h-full px-40 py-20">
                    <div className='pl-2 border-r-2 border-white/30 pb-2 pr-3 w-fit'>
                        <h1 className="text-left mb-0 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#f5af19] to-[#f12711]">
                            Services
                        </h1>
                        <span className='text-left font-semibold text-sm text-white group-hover:text-gray-400'>
                            We Provide
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="border-2 w-full border-white/70 min-h-[10rem] relative p-4 rounded-2xl">
                            <div className='absolute -left-[108px] top-5 bg-gray-100 rounded-md rounded-r-none px-2'>
                                <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#ec8e02] to-[#f12711] drop-shadow-lg group-hover:drop-shadow-[0_10px_10px_rgba(241,39,17,0.7)] duration-200">
                                        UI Designing
                                </h1>
                            </div>
                            <div className='absolute w-6 h-6 flex items-center justify-center shadow-lg shadow-red-500/30 -left-36 top-5 bg-red-500/20 text-sm font-extrabold border border-red-500 text-red-500 rounded-full'>
                                1
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-12 h-20 p-[6px] bg-[#141E30] rounded-md relative">
                                    <div className="w-full h-full flex items-center bg-gradient-to-br from-[#f5af19] to-[#f12711] justify-center rounded text-white">
                                        <span className='border rounded-full py-1 px-[6px] text-sm'>BR</span>
                                    </div>
                                    <span className='absolute font-semibold -left-[67px] rounded-r-none top-[90px] bg-green-600 text-white shadow-lg shadow-green-500/30 border border-green-700 text-sm rounded-md px-2'>Mobile App</span>
                                    <div className="w-[2px] h-[46px] bg-white/30 mt-[6px] ml-4"></div>
                                </div>
                                <div className="w-48 h-28 ml-10 bg-[#141E30] relative p-[6px] rounded-md">
                                    <div className="w-full h-full flex items-center bg-gradient-to-br from-[#f5af19] to-[#f12711] justify-center rounded text-white">
                                        <span className='border rounded-full py-1 px-[6px] text-xl drop-shadow-lg'>BR</span>
                                    </div>
                                    <span className='absolute font-semibold left-[60px] -bottom-2 bg-purple-600 text-white shadow-lg shadow-purple-500/30 border border-purple-700 text-sm rounded-md px-2'>Web App</span>
                                    <div className="w-[2px] h-[30px] bg-white/30 mt-[6px] ml-4"></div>
                                    <div className="w-[2px] h-[30px] bg-white/30 absolute -bottom-[30px] right-5"></div>
                                </div>
                                <div className="w-20 h-24 ml-10 bg-[#141E30] relative p-[6px] rounded-md">
                                <div className="w-full h-full flex items-center bg-gradient-to-br from-[#f5af19] to-[#f12711] justify-center rounded text-white">
                                        <span className='border rounded-full py-1 px-[6px] text-sm drop-shadow-lg'>BR</span>
                                    </div>
                                    <span className='absolute font-semibold -right-[91px] rounded-l-none top-2 bg-sky-600 text-white shadow-lg shadow-sky-500/30 border border-sky-700 text-sm rounded-md px-2'>Responsive <br /> Design</span>
                                    <div className="w-[2px] h-[38px] bg-white/30 mt-[6px] ml-8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 w-full mt-20 border-white/70 min-h-[10rem] relative p-4 rounded-2xl">
                            <div className='absolute -left-[202px] top-5 bg-gray-100 rounded-md rounded-r-none px-2'>
                                <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#ec8e02] to-[#f12711] drop-shadow-lg group-hover:drop-shadow-[0_10px_10px_rgba(241,39,17,0.7)] duration-200">
                                        Application Development
                                </h1>
                            </div>
                            <div className='absolute w-6 h-6 flex items-center justify-center shadow-lg shadow-yellow-500/30 -left-60 top-5 bg-yellow-500/20 text-sm font-extrabold border border-yellow-500 text-yellow-500 rounded-full'>
                                2
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-1/2 h-full relative border-r text-center">
                                    <div className="flex flex-row gap-2 my-4 w-full justify-evenly">
                                        <div className='rounded w-12 flex items-center flex-col bg-gradient-to-t from-amber-600 via-transparent to-transparent'>
                                            <AiFillApi className='text-2xl m-2 text-amber-400'></AiFillApi>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">APIs</span>
                                        </div>
                                        <div className='rounded w-12 flex items-center flex-col bg-gradient-to-t from-red-600 via-transparent to-transparent'>
                                            <BiCodeCurly className='text-2xl m-2 text-red-400'></BiCodeCurly>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">Codes</span>
                                        </div>
                                        <div className='rounded w-12 flex items-center flex-col bg-gradient-to-t from-indigo-600 via-transparent to-transparent'>
                                            <AiOutlineDatabase className='text-2xl m-2 text-indigo-400'></AiOutlineDatabase>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">DBs</span>
                                        </div>
                                    </div>
                                    <span className='font-semibold text-white border-b border-teal-700 text-sm'>Backend</span>
                                </div>
                                <div className="w-1/2 h-full relative border-l text-center">
                                    <div className="flex flex-row gap-2 my-4 w-full justify-evenly">
                                        <div className='rounded w-12 flex items-center flex-col bg-gradient-to-t from-cyan-600 via-transparent to-transparent'>
                                            <CgWebsite className='text-2xl m-2 text-cyan-400'></CgWebsite>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">Web</span>
                                        </div>
                                        <div className='rounded w-14 flex items-center flex-col bg-gradient-to-t from-green-600 via-transparent to-transparent'>
                                            <AiOutlineAndroid className='text-2xl m-2 text-green-400'></AiOutlineAndroid>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">Android</span>
                                        </div>
                                        <div className='rounded w-12 flex items-center flex-col bg-gradient-to-t from-pink-600 via-transparent to-transparent'>
                                            <MdOutlineAdminPanelSettings className='text-2xl m-2 text-pink-400'></MdOutlineAdminPanelSettings>
                                            <span className="w-full text-sm text-center rounded-b font-semibold text-white">CP</span>
                                        </div>
                                    </div>
                                    <span className='font-semibold text-white border-b border-teal-700 text-sm'>Frontend</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 w-full mt-20 border-white/70 min-h-[10rem] relative p-4 rounded-2xl">
                            <div className='absolute -left-[179px] top-5 bg-gray-100 rounded-md rounded-r-none px-2'>
                                <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#ec8e02] to-[#f12711] drop-shadow-lg group-hover:drop-shadow-[0_10px_10px_rgba(241,39,17,0.7)] duration-200">
                                        Deployment & Scaling
                                </h1>
                            </div>
                            <div className='absolute w-6 h-6 flex items-center justify-center shadow-lg shadow-green-500/30 -left-[218px] top-5 bg-green-500/20 text-sm font-extrabold border border-green-500 text-green-500 rounded-full'>
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </DefaultLayout>
        </>
    )
}
