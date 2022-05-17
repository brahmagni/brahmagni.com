import Link from "next/link"
import {useRouter} from "next/router"
import {FcBusinessContact} from "react-icons/fc"
import {AiTwotoneBug} from "react-icons/ai"
import {RiCopyrightLine} from 'react-icons/ri'
export const FootNote = () =>{
    const router = useRouter()
    return(<>
    <div className="container mx-auto flex items-center justify-center">
        <div className="mr-auto whitespace-nowrap border px-2 rounded-md flex flex-row gap-2 items-center">
            <RiCopyrightLine></RiCopyrightLine>Brahmagni Pvt. Ltd.
        </div>
        <div className="border min-w-max rounded-lg flex flex-row">
            <div className="flex flex-row items-center gap-4 px-2">
            <Link href={'/report-bug'} passHref><a className={router.pathname == '/report-bug' ? "flex flex-row items-center gap-1 scale-110 text-black relative" : "relative flex text-gray-500 group flex-row items-center gap-1 hover:scale-110 duration-200 text-base"}>
                <AiTwotoneBug className="group-hover:text-black duration-200"></AiTwotoneBug>Report a Bug 
                </a>
            </Link>
            <div className="h-4 w-[2px] bg-gray-300"></div>
            <Link href={'/contact'} passHref><a className={router.pathname == '/contact' ? "flex flex-row items-center gap-1 scale-110 text-black relative" : "relative flex text-gray-500 group flex-row items-center gap-1 hover:scale-110 duration-200 text-base"}>
                <FcBusinessContact className="group-hover:text-black duration-200"></FcBusinessContact>Contact Us 
                </a>
            </Link>
        </div>
        
    </div>
    </div>
    </>)
}