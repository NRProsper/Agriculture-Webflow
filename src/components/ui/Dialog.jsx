import Backdrop from "./Backdrop.jsx";
import {IoClose as Close} from "react-icons/io5";
import {createContext, useContext} from "react";

const DialogContext = createContext();
import {motion} from "framer-motion"


const DialogProvider = ({ children, handleClose }) => {
    return (
        <DialogContext.Provider value={{ handleClose }}>
            {children}
        </DialogContext.Provider>
    );
};

const useDialogContext = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error('useDialogContext must be used within a Dialog component');
    }
    return context;
}

const Dialog = ({handleClose, children}) => {
    return(
        <Backdrop onClick={handleClose}>
            <DialogProvider handleClose={handleClose}>
                <motion.div
                    initial={{y: "-200px", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y:"100vh", opacity: 0}}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="relative bg-white rounded-lg p-4 w-[700px] mx-auto"
                     onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </motion.div>
            </DialogProvider>
        </Backdrop>
    )
}

const DialogTitle = ({children}) => {
    const {handleClose} = useDialogContext()
    return (
        <div className="flex items-center justify-between pb-2 border-b border-gray">
            <h3 className="text-darkGreen font-semibold text-2xl">{children}</h3>
            <span
                className="text-2xl font-semibold text-darkGreen cursor-pointer"
                onClick={handleClose}
            >
            <Close/>
        </span>
        </div>
    )
}

const DialogBody = ({children}) => {
    useDialogContext()
    return (
        <div className="pt-3">
            {children}
        </div>
    )
}


Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;

export default Dialog;

