import Star from "./Star.jsx";
import StarRating from "./StarRating.jsx";

const ProductCard = ({product, className}) => {
    return(
        <div className="border-gray  rounded-[8px]">
            <div className={`top ${className} relative`}>
                <img
                    src={product.image}
                    alt={product.name+" Image"}
                    className={"h-[370px] rounded-[8px] object-cover w-full"}
                />
                <p className="category absolute top-2 left-2 font-sans text-[15px] font-semibold px-[16px] py-[5px] bg-darkGreen rounded-[8px] text-neutral capitalize">{product.category}</p>
            </div>
            <div className="bottom p-2">
                <h4 className="text-darkGreen py-[6px] font-semibold capitalize border-b border-gray">{product.name}</h4>
                <div className="flex items-center justify-between">
                    <div className="price flex items-center gap-2 mt-2">
                        <span className="text-[#B8B8B8] font-semibold text-[15px] line-through">$20.00</span>
                        <span className="font-bold text-darkGreen text-[18px]">{`$${product.price}.00`}</span>
                    </div>
                    <StarRating />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;