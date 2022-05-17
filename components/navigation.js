import Link from "next/link"
import {useRouter} from "next/router"
import { useEffect, useState } from "react"
import {MdOutlineClose} from "react-icons/md"
import {HiOutlineMenuAlt2} from "react-icons/hi"
import {BiHomeAlt} from "react-icons/bi"
import {GiRocketThruster} from "react-icons/gi"
export const Navigation = () =>{
  const router = useRouter()
    const [showNaviGation, setShowNaviGation] = useState(true)
    useEffect(() => {
      if(window.innerWidth < 575){
        // Responsive Logic
      }
    }, [])
    
    return(<>
    <div className={(showNaviGation ? `w-96 border` : `w-auto`) + ` h-10 rounded-lg flex flex-row`}>
    {showNaviGation ? <>
    <div className="flex flex-row items-center justify-evenly w-11/12">
        <Link href={'/'} passHref><a className={router.pathname == '/' ? "flex flex-row items-center gap-1 scale-110 text-black relative" : "relative flex text-gray-500 group flex-row items-center gap-1 hover:scale-110 duration-200 text-base"}>
            <BiHomeAlt className="group-hover:text-black duration-200"></BiHomeAlt>Home 
            {router.pathname == '/' ? <><div className="w-9 shadow-2xl shadow-[#243B55] bg-gradient-to-r from-[#141E30] to-[#243B55] h-1 absolute bottom-0 -mb-2 rounded-full"></div></>:<></>}
            </a>
        </Link>
        <Link href={'/portfolio'} passHref><a className={router.pathname == '/portfolio' ? "flex flex-row items-center gap-1 scale-110 text-black relative" : "relative flex text-gray-500 group flex-row items-center gap-1 hover:scale-110 duration-200 text-base"}>
            <GiRocketThruster className="group-hover:text-black duration-200"></GiRocketThruster>Portfolio 
            {router.pathname == '/portfolio' ? <><div className="w-9 bg-blue-500 h-1 absolute bottom-0 -mb-2 rounded-full"></div></>:<></>}
            </a>
        </Link>
        <button>Solution</button>
    </div>
    <button className="w-1/12 flex flex-row items-center justify-evenly bg-slate-300 rounded-full m-1" onClick={(e)=>{setShowNaviGation(false)}}><MdOutlineClose></MdOutlineClose></button>    
    </>:<>
    <button className="flex flex-row items-center gap-2 border px-2 rounded-lg" onClick={(e)=>{setShowNaviGation(true)}}><HiOutlineMenuAlt2></HiOutlineMenuAlt2>Menu</button>
    </>}
    </div>
    </>)
}