import Link from "next/link"
import {useRouter} from "next/router"
import { useEffect, useState } from "react"
import { motion,AnimatePresence } from "framer-motion"
import {MdOutlineClose} from "react-icons/md"
import {HiOutlineMenuAlt2} from "react-icons/hi"
import {BiHomeAlt} from "react-icons/bi"
import {GiRocketThruster} from "react-icons/gi"
const MenuBar = ({isVisible}) =>{
  const router = useRouter()
 return(<AnimatePresence>
  {isVisible && (
   <motion.div
   initial={{ opacity: 0, x: 50, y: 0 }}
   animate={{ opacity: 1, x: 0, y: 0}} 
   exit={{ x: -100, y: 0,opacity: 0}}
   transition={{ type: 'tween' }}
   className="w-96 border h-10 rounded-lg flex flex-row">
       <div className="w-full flex flex-row items-center justify-evenly">
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
   </motion.div>
  )}
</AnimatePresence>) 
}

const ShowMenuBtn = ({isVisible,handleClick}) =>{
 return(<AnimatePresence>
  {isVisible && (
   <motion.div
   initial={{ opacity: 0, x: 0, y: 0 }}
   animate={{ opacity: 1, x: 0, y: 0}} 
   exit={{ x: 100, y: 0,opacity: 0}}
   transition={{ type: 'linear' }}
   className="w-auto h-10 flex flex-row">
    <button
    className="flex flex-row items-center gap-2 border px-2 rounded-lg"
    onClick={handleClick}
    >
      <HiOutlineMenuAlt2></HiOutlineMenuAlt2>Menu
    </button>
   </motion.div>
  )}
</AnimatePresence>) 
}

const CloseMenuBtn = ({isVisible,handleClick}) =>{
  return(<AnimatePresence>
    {isVisible && (
     <motion.div
     initial={{ opacity: 0, x: 0, y: 20 }}
     animate={{ opacity: 1, x: 0, y: 0}} 
     exit={{ x: 0, y: -50,opacity: 0}}
     transition={{ type: 'tween' }}
     className="w-auto h-10 flex flex-row items-center ml-2">
      <button
      className="flex flex-row items-center gap-2 py-1 text-xl px-1 shadow-[#243b55a4] bg-gradient-to-r from-[#141E30] to-[#243B55] text-white shadow-lg rounded-full"
      onClick={handleClick}
      >
        <MdOutlineClose></MdOutlineClose>
      </button>
     </motion.div>
    )}
  </AnimatePresence>) 
 }

export const Navigation = () =>{
  const [showNaviGation, setShowNaviGation] = useState(true)
  const [showNaviGationBTN, setShowNaviGationBTN] = useState(false)
  useEffect(() => {
      if(window.innerWidth < 575){
        // Responsive Logic
      }
    }, [])
    return(<>
      <MenuBar isVisible={showNaviGation}></MenuBar>
      <ShowMenuBtn isVisible={showNaviGationBTN} handleClick={()=>{setShowNaviGation(true),setShowNaviGationBTN(false)}}></ShowMenuBtn>
      <CloseMenuBtn isVisible={showNaviGation} handleClick={()=>{setShowNaviGation(false),setShowNaviGationBTN(true)}}></CloseMenuBtn>
    </>)
}