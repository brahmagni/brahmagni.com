import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
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
                <div className="w-1/2 h-full">
                
                </div>
            </div>
        </div>
        </DefaultLayout>
        </>
    )
}
