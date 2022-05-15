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
        <div className="mx-auto container rounded-3xl h-[88vh] shadow-2xl shadow-[#243B55] bg-gradient-to-r from-[#141E30] to-[#243B55]">
            Welcome to Site
        </div>
        </DefaultLayout>
        </>
    )
}
