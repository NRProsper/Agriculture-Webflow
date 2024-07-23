import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
    return (
        <div
            className=" h-[583px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <Link to={""} className="px-[83px] py-[34px] text-[25px] font-semibold text-darkGreen bg-neutral rounded-[20px]">
                {category.name}
            </Link>
        </div>
    )
}


export default CategoryCard;