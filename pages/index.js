import Head from 'next/head'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
export default function Home(){
    return (
        <>
        <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</title>
            </Head>
        <DefaultLayout>
          Welcome to Our Site
        </DefaultLayout>
        </>
    )
}
