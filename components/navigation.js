import Link from "next/link"
import Router from "next/router"
export const Navigation = () =>{
    return(<>
    <div className=" md:w-96 h-10 border">
        <Link href={'/'} passHref><a>Home</a></Link>
        <Link href={'/portfolio'} passHref><a>Portfolio</a></Link>
        <button>Solution</button>
    </div>
    </>)
}