import {Link} from "react-router-dom";
import { FaCircleArrowRight as Arrow } from "react-icons/fa6";

const Button = ({title, hasIcon}) => {
    return (
        <Link to={""} className="inline-block rounded-[16px] px-[39px] py-[28px] items-center bg-yellow">
            <div className="flex items-center justify-center gap-[10px]">
                <span className="font-bold text-darkGreen">
                {title}
            </span>
                {
                    hasIcon ? (
                        <span className={"text-darkGreen"}>
                            <Arrow />
                        </span>
                    ) : ""
                }
            </div>
        </Link>
    )
}

export default Button