import Button from "../Button.jsx";
import { IoPerson as Person } from "react-icons/io5";

const NewsCard = ({blog}) => {
    return(
        <div
            className=" w-[400px] h-[300px] md:w-[500px] md:h-[600px]   xl:h-[524px] xl:w-[500px] rounded-[12px] relative"
            style={{
                backgroundImage: `url(${blog.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <span className="absolute w-[82px] h-[82px] flex items-center justify-center text-center font-extrabold text-[25px] leading-[24px] text-darkGreen top-[20px] left-[40px] bg-neutral rounded-full">25<br /> Nov</span>
            <div className=" absolute  -bottom-[40px] left-1/2 -translate-x-1/2 w-[350px] md:w-[420px] xl:w-[440px] bg-neutral px-[30px] xl:px-[57px] pb-[60px] pt-[49px] rounded-[30px]">
                <div className="flex gap-2">
                    <span className="text-yellow">
                        <Person />
                    </span>
                    <span className="text-darkGreen text-[18px] font-medium">By Rachi Card</span>
                </div>
                <div className={"my-[15px]"}>
                    <h4 className="text-[25px] font-extrabold text-darkGreen">{blog.title}</h4>
                    <p className="font-medium text-[18px] font-sans text-darkGray" dangerouslySetInnerHTML={{__html: blog.description}} />
                </div>
                <Button hasIcon={true}>
                    Read More
                </Button>
            </div>
        </div>
    )
}

export default NewsCard;