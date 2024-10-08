import {motion} from "framer-motion";


const Backdrop = ({children, onClick}) => {
    return(
        <motion.div
            className="absolute top-0 z-[999] left-0 w-full h-screen bg-black/70 flex items-center justify-center"
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
        >
            {children}
        </motion.div>
    )
}


export default Backdrop;