import {Link} from "react-router-dom";
import { FaCircleArrowRight as Arrow } from "react-icons/fa6";

const Button = ({children, hasIcon, className}) => {
    return (
        <Link to={""} className={`inline-block rounded-[16px] px-[39px] py-[20px] items-center ${className ? className : 'bg-yellow'}`}>
            <div className="flex items-center justify-center gap-[10px]">
                <span className={`font-bold ${className?`text-white` : `text-darkGreen`}`}>
                {children}
            </span>
                {
                    hasIcon ? (
                        <span className={className? `text-[#335B6B]` : "text-darkGreen"}>
                            <Arrow />
                        </span>
                    ) : ""
                }
            </div>
        </Link>
    )
}

export default Button