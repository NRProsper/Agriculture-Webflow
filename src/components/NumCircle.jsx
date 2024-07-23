
const NumCircle = ({number, text}) => {
    return(
        <div className=" w-[120px] h-[120px] xl:w-[211px] xl:h-[211px] flex items-center justify-center flex-col rounded-full bg-gray border-neutral border-2 outline outline-lightGreen">
            <span className="capitalize text-center font-extrabold text-[25px] xl:text-[50px] text-darkGreen">{number}</span>
            <span className="capitalize text-center font-semibold font-sans text-[12px] xl:text-[18px] text-darkGreen">{text}</span>
        </div>
    )
}

export default NumCircle;