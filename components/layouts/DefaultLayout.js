import { motion } from "framer-motion"
import { FootNote } from "../footNote"
import { Navigation } from "../navigation"
export const  DefaultLayout = ({children}) =>{
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -200 },
    }
    return(<>
    <header className="container mx-auto py-2 flex sticky justify-end top-0">
      <Navigation></Navigation>
    </header>
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
    >
      {children}
    </motion.main>
    <footer className="absolute h-full flex flex-col items-center justify-center w-10 left-0 top-0"><FootNote></FootNote></footer>
    </>)
}