import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
export default function Portfolio(){
    return (
        <>
        <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</title>
            </Head>
        <DefaultLayout>
        <div className="mx-auto container rounded-3xl h-[88vh] shadow-2xl shadow-slate-200 bg-slate-400">
            Welcome to Portfolio
        </div>
        </DefaultLayout>
        </>
    )
}
